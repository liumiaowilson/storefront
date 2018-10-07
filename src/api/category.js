export const getCategory = id => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve({
        id: `${id}`,
        title: 'Plates',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerate turpis ac. In egat massa sed enim henderrit auctor a eget arcu. Curabitur ac pharetra nisl sit.',
        image: '/media/plates-header.jpg'
      });
    }, 50);
  });
};
