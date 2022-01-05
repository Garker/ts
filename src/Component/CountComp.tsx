interface Iprops{
    num:number
    onChange?:(n:number) => void
}

const CountComp:React.FC<Iprops> =  function(props){
    return (
        <div>
            <span onClick={() => {
                if(props.onChange){
                    props.onChange(props.num - 1);
                }
            }}>-</span>
            <span>{props.num}</span>
            <span onClick={() => {
                if(props.onChange){
                    props.onChange(props.num + 1);
                }
            }}>+</span>
        </div>
    )
}

export{
    CountComp
}