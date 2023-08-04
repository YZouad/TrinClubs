 
const ColumnCardGrid = (props) => {
    let {columns} = props;
    console.log('col', columns);
    //fall back to not break compone
    columns = !columns ? '3' : columns; 
     
    if (columns === '3') {
        return (
            <div className="flex-grid-three-column">
              {props.children} 
           </div>
       );
    }

    if (columns === '2') {
        return (
            <div className="flex-grid-two-column">
              {props.children} 
           </div>
       );
    }



   
}
  
export default ColumnCardGrid;