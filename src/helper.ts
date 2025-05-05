const formatDate = (date: Date) => {
    const months = [
        'януари',
        'февруари',
        'март',
        'април',
        'май',
        'юни',
        'юли',
        'август',
        'септември',
        'октомври',
        'ноември',
        'декември',
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export { formatDate };
