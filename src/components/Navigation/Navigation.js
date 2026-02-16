import './Navigation.css';
const product = {
  item: [
  {id: 1 ,label: "Главная"},
   {id: 2,label: "Каталог"},
    {id: 3 ,label: "Контакты"}
],
idactive :2};

function NavigationItem(props)
{
  const style = {color: props.item.id === props.idactive? "blue":""}

  return (<li style = {style}>
    {props.item.id} - {props.item.label}
  </li>)

};
export function Navigation()  {
return <ul>
  { 
product.item.map(item=><NavigationItem item = {item}
idactive={product.idactive}></NavigationItem>)
  }
</ul>
};


