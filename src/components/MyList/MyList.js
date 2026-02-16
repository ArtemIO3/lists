import './MyList.css';

const products = [
  {title:'капуста',isFruit: false, id: 1,quantity: 5+"kg"},
  {title:'Чкснок',isFruit: false, id: 2,quantity: 10+"kg"},
  {title:'Яблоко',isFruit: true, id: 3,quantity: 15+"kg"},
  {title:'Киви',isFruit: true, id: 4,quantity: 52+"kg"},
  {title:'Лук',isFruit: false, id: 5,quantity: 25+"kg"},
  {title:'Картошка',isFruit: false, id: 6,quantity: 35+"kg"},
  {title:'Бананы',isFruit: true, id: 7,quantity: 55+"kg"},
    {title:'Ананасы',isFruit: true, id: 8,quantity: 45+"kg"}
];

function Elem(props)
{
  const style = {color: props.item.isFruit? "blue":"green"}

  return <li style = {style}>
    {props.item.title} - {props.item.quantity}
  </li>
}

export function MyList() {
  return <ul>
    {products.map(elem=><Elem item={elem}></Elem>)}
  </ul>
};