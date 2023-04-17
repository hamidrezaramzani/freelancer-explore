import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { JSDOM } from "jsdom";
import { InputConfigType, ItemType, websites } from "@/config/config";

const generateFreelancingJobs = async (
  config: InputConfigType,
  keyword: string
) => {
  const { data: htmlCode } = await axios.get(
    config.address.replace("%s", keyword)
  );
  const dom = new JSDOM(htmlCode);

  const container = dom.window.document.querySelector(
    config.selectors.container
  );

  const data: ItemType[] = [];
  for (const item of (container as any).querySelectorAll(
    config.selectors.item
  )) {
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
  data = data.sort((a: ItemType, b: ItemType) => {
    if (Number(a.projectBudget) > Number(b.projectBudget)) {
      return -1;
    }
    if (Number(a.projectBudget) < Number(b.projectBudget)) {
      return 1;
    }
    return 0;
  });
  return res.status(200).json(data);
};

export default handler;
