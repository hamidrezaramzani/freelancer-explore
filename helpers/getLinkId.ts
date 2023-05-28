const getFreelancerJobId = (link: string) => {
    return link.split("/")[4];
};
export default getFreelancerJobId;