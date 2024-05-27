import { forwardRef } from "react"

export default forwardRef(function Input(props, ref) {
    const styles = {
        'checkbox' : 'rounded border-gray-300 ml-2 text-gray-700 disabled:opacity-75',
        'file': 'file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:opacity-50 file:dark:text-gray-400',
        'default' : 'w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 disabled:opacity-75'
    }
    return (
        <input ref={ref} {...props} className={styles[props.type] ?? styles['default']}></input>
    )
})