const common = {

    imgPath: './images',
    period: (start, end) => (`${start.replace(/-/g, '/')} - ${end.replace(/-/g, '/')}`),
    handleParagraph: (str) => (str.replace(/\n/g, '<br>')),

};

export default common;
