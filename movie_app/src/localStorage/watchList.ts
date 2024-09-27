interface item{
    id:string;
}
export const saveList = (item:item) => {
    const list:item[] = JSON.parse(localStorage.getItem('list')??'[]');
    list.push(item);
    localStorage.setItem('list',JSON.stringify(list))
}
// export const getList = () => {
//     return(JSON.parse(localStorage.getItem('list')??'[]'));
// }
export const getList = () => {
    try {
      const storedList = localStorage.getItem('list');
      if (!storedList) {
        return [];
      }
      return JSON.parse(storedList);
    } catch (error) {
      console.error('Error parsing stored list:', error);
      return [];
    }
  };
export const removeItem = (item:item) =>{
    const list:item[] = JSON.parse(localStorage.getItem('list')??'[]');
    const updatedList = list.filter(i => i.id !== item.id);

  // Save the updated list back to localStorage
  localStorage.setItem('list', JSON.stringify(updatedList));
}