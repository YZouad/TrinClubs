//import classes from './sample.module.scss'; 
//import classes from './event-content.module.css';

export default function FlexGrid(props) { 
     
    const { columns, hasGutters, isContained } = props;
    const contained = isContained === true ? 'container': ''; 
    const guttered = hasGutters === true ? 'gutter-auto': '';
    const columnClass = `flex-grid-${columns}-col`;

    //const dynClass =  [classes.randy + ' '  + classes.flex_grid_2_col]
 
    return (
    
        <div className={`${contained} ${columnClass} ${guttered}`}>
        { props.children }
        </div>
    
    );
}

