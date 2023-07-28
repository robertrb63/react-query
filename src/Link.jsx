import { EVENTS } from './consts.js'

export function Navigate(href){
    window.history.pushState({},'',href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }

  // eslint-disable-next-line react/prop-types
  export function Link ({target, to, ...props}){
    const handleClick = (event) => {
      event.preventDefault()

      const isMainEvent = event.button === 0  
      const isModifiedEvent = event.metakey || event.altkey || event.ctrlKey || event.shiftKey
      const isManageableEvent = target === undefined || target === '_self'

      if (isMainEvent && isManageableEvent && !isModifiedEvent){
        event.preventDefault()
        Navigate(to)
      }
    }

    return <a onClick={handleClick} href={to} target={target} {...props}/>
  }