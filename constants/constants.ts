export interface NavbarItemType {
    link: string;
    title: string;
}

export const LINKS: NavbarItemType[] = [
    {
        title: "خانه",
        link: "/"
    },
    {
        title: "درباره ما",
        link: "/about-us"
    },
    {
        title: "تماس با ما",
        link: "/contact-us"
    },
];