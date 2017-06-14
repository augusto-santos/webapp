export const styleOn = { 
    opacity: 1,
    transform: 'scale(1,1)'
}

export const styleOff = {
    opacity: 0,
    transform: 'scale(0,0)'
}


export function delayItem(index){
    const delay = delayTransition(0.3, index)
    const style ={
        opacity: 1,
        transform: `scale(1,1)`,
        transition: ` opacity 0.3s cubic-bezier(0,0,0.2,1) ${delay}s`
    }
    return style
}

function delayTransition(transitionDuration, index){
    return ((((transitionDuration / 2 ) + index / 10) / 2))
}

export const itemListStyle = {
    opacity: 0,
    height: '48px',
    transform: 'scale(0,1)',
    transformOrigin: 'left'
}