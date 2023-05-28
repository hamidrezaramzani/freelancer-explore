const digest = async ({ message }: { message: string }) => {
    var hash = 0,
        i, chr;
    if (message.length === 0) return hash;
    for (i = 0; i < message.length; i++) {
        chr = message.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return String(hash);
};

export default digest;