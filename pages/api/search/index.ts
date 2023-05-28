import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { JSDOM } from "jsdom";
import { InputConfigType, ItemType, websites } from "@/config/config";
import Saved from "@/database/Models/Saved";
import digest from "@/helpers/digest";
const generateFreelancingJobs = async (
  config: InputConfigType,
  keyword: string
) => {
  try {
    const { data: htmlCode, status } = await axios.get(
      config.address.replace("%s", keyword)
    );
    if (status !== 200) {
      return [];
    }

    const dom = new JSDOM(htmlCode);

    const container = dom.window.document.querySelector(
      config.selectors.container
    );

    const data: ItemType[] = [];
    const items = (container as any).querySelectorAll(config.selectors.item);
    for (const item of items) {
      if (config.selectors.budget(item)) {
        const generatedItem: any = {
          projectTitle: item.querySelector(config.selectors.title)?.innerHTML,
          projectDescription: item.querySelector(config.selectors.description)
            ?.innerHTML,
          projectBudget: config.selectors.budget(item),
          projectLink: config.selectors.link(item),
          projectTags: config.selectors.tags(item),
          name: config.name,
        };
        data.push(generatedItem);
      } else {
        continue;
      }
    }
    return data;
  } catch (error) {
    return [];
  }
};

const getWebsiteJobId = (website: string, link: string) => {
  return link.split("/")[4];
};
const checkPostIsAlreadySaved = async (data: ItemType[]) => {
  let finalData: ItemType[] = [...data];
  (finalData as any) = finalData.map(async (item: ItemType) => {
    const id = getWebsiteJobId(item.name, item.projectLink);
    const hash = await digest({ message: `${id}${item.name}` });
    const isSaved = await Saved.findOne({ hash });
    item.hash = String(hash);
    item.isSaved = isSaved!!;
    return item;
  });

  finalData = await Promise.all(finalData);
  return finalData;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { keyword } = req.query;
  let data: ItemType[] = [];
  const websiteNames = Object.keys(websites);
  for (const websiteName of websiteNames) {
    const newData = await generateFreelancingJobs(
      websites[websiteName](),
      String(keyword)
    );
    data = data.concat(newData);
  }

  data = await checkPostIsAlreadySaved(data);
  return res.status(200).json(data);
};

export default handler;
