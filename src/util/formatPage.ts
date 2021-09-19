const formatPage = (item: any[], limit: number, offset: number) => {
    const hasNextPage = item.length > limit;

    const edges = hasNextPage ? item.slice(0, limit) : item;

    const pageInfo = { limit, hasNextPage, offset, total: edges.length };

    return {
        edges,
        pageInfo
    };
};

export default formatPage;
