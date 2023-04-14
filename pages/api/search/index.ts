// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer';

type Data = {
  name: string
}


const getPonishaData = async (keyword: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  await page.goto(`https://ponisha.ir/search/projects/keyword-${keyword}/currency-IRR/sort-newest`);

  await page.waitForSelector(".container.list");
  const list = await page.$eval(
    "ul.list-unstyled.projects",
    (ul) => {
      const list: any[] = [];
      ul.querySelectorAll(".item").forEach((li) => {
        const projectTitle = li?.querySelector(".detail .title a h4")?.innerHTML;
        const projectLink = li?.querySelector(".detail .title a")?.getAttribute("href");
        const projectDescription = li?.querySelector(".detail .desc")?.innerHTML;
        const projectBudget = li?.querySelector(".thumb span span span:nth-child(1)")?.innerHTML;
        const labels: string[] = [];
        li?.querySelector(".detail .labels")?.querySelectorAll("a").forEach(label => {
          const currentLabel: any = {};
          currentLabel.link = label.getAttribute("href");
          currentLabel.title = label.textContent;
          labels.push(currentLabel);
        });
        list.push({
          projectTitle,
          projectDescription,
          projectBudget,
          projectLink,
          projectTags: labels,
        });
      });

      return list;
    }
  );

  await browser.close();

  return list;;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const keyword = req.query.keyword;
  let data: Data[] = [];
  const ponisha = await getPonishaData(String(keyword));
  data = [...data, ...ponisha];
  return res.status(200).json(data);
}
