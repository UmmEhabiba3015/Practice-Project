import className from "classnames"

function Button ({
    children,
    primary,
    secondary,
    warning,
    success,
    danger,
    outlined,
    rounded,
    ...rest
})
{
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border',{
        'border-blue-600 bg-blue-500 text-white' : primary, 
        'border-gray-900 bg-gray-500 text-white' : secondary, 
        'border-green-600 bg-green-500 text-white' : success, 
        'border-yellow-600 bg-yellow-500 text-white' : warning, 
        'border-red-600 bg-red-500 text-white' : danger, 
        'rounded-full' : rounded,
        'bg-white' : outlined,
        '!text-blue-500' : outlined && primary,
        '!text-gray-500' : outlined && secondary,
        '!text-green-500' : outlined && success,
        '!text-yellow-500' : outlined && warning,
        '!text-red-500' : outlined && danger,
    })

    return <div>
        <button {...rest} className={classes}>{children}</button>
    </div>
}
Button.propTypes = {
    checkVariationValue : ({primary, secondary, warning, success, danger}) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!success)
        + Number(!!danger)
        if(count>1){
            return new Error ("Only one of primary, secondary, warning, success, danger can be true")
        }
    }
    
}
export default Button;