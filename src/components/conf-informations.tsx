import { AnimationEvent, TransitionEvent, useEffect, useState } from "react";

export default function ConfInformations() {
  const [state, setState] = useState<'hidden'|'initial'>('hidden')
  const items = [
    {
      cursorTitle: 'conf',
      index: 0,
      children: (
        <>
          <span className="bold next-js">Next.js </span>
          <span>CONF24</span>
        </>
      )
    },
    {
      cursorTitle: 'is',
      index: 1,
      children: (
        <>
          <span className="gray">Join us for </span>
          <span className="light-black">Next.js Conf </span>
          <span className="gray">On </span>
          <span className="light-black">Oct 24</span>
        </>
      )
    },
    {
      cursorTitle: 'here',
      index: 2,
      children: (
        <button>
          <span>Get Tickets</span>
            <svg viewBox="0 0 26.00 26.00" transform="matrix(-1, 0, 0, 1, 0, 0)"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs> </defs> <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" > <g transform="translate(-423.000000, -1196.000000)" fill="#ffffff"> <path d="M428.115,1209 L437.371,1200.6 C438.202,1199.77 438.202,1198.43 437.371,1197.6 C436.541,1196.76 435.194,1196.76 434.363,1197.6 L423.596,1207.36 C423.146,1207.81 422.948,1208.41 422.985,1209 C422.948,1209.59 423.146,1210.19 423.596,1210.64 L434.363,1220.4 C435.194,1221.24 436.541,1221.24 437.371,1220.4 C438.202,1219.57 438.202,1218.23 437.371,1217.4 L428.115,1209" id="chevron-left"> </path> </g> </g> </g></svg>
        </button>
      )
    },
  ]
 
  useEffect(() => {
    setTimeout(() => {
      setState('initial')
    }, 500);
  }, [])
  
  // hidden --> initial --> text-opacity-1 --> bg-opacity-0 --> cursor-out 
  function handleTransitionEnd(e:TransitionEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement ;

    if(target.classList.contains('content')) {
      const backgroundColor = target.previousElementSibling?.firstElementChild ;
      backgroundColor?.classList.add('background-color-hidden') ;
    }

    if(target.classList.contains('background-color')) {
      const cursorContainer = target.closest('.conf-item')?.querySelector('.cursor-container')
      cursorContainer?.classList.add('cursor-container-hidden') ; 
    }
  }

  function handleAnimationEnd(e:AnimationEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement ;

    if(target.classList.contains('conf-item')) {
      const content = target.querySelector('.content') ;
      content?.classList.add('content-visible')
    }
  }
  return (
    <div 
        className="conf-informations-container" 
        onTransitionEnd={handleTransitionEnd}
        onAnimationEnd={handleAnimationEnd}
      >
        {
          items.map((item) => (
            // animation de l'axe y ici pour l'effet de courbe 
            <div key={item.index} className={`conf-item-wrapper ${state == 'initial' && 'conf-item-wrapper-initial'}`}>
              {/* animation de l'axe x ici  */}
              <div className={`conf-item ${state == 'initial' && 'conf-item-initial'}`}>
                {/* contient le rectangle bleu et le curseur  */}
                <div className="background">
                  {/* rectangle bleu  */}
                  <div className="background-color"></div>
                  {/* curseur  */}
                  <div className="cursor-container">
                    <span className="cursor-svg">
                      <svg strokeLinejoin="round"  viewBox="0 0 25 25" ><path d="M1.23346 3.68956L5.75089 22.4046C6.16049 24.1015 8.44802 24.3972 9.27562 22.8602L13.4519 15.1044L21.7817 12.1294C23.4374 11.5381 23.4739 9.20965 21.8374 8.56676L3.77868 1.47225C2.34563 0.909269 0.872193 2.19288 1.23346 3.68956ZM13.5212 14.9756C13.5211 14.9757 13.521 14.9759 13.5209 14.9761L13.5212 14.9756Z" fill="currentColor" stroke="#EDEDED" strokeWidth="2.28316"></path></svg>
                    </span>
                    <span className="cursor-name">{item.cursorTitle}</span>
                  </div>
                </div>
                <div className="content">{item.children}</div>
              </div>
            </div>
          ))
        }
      </div>
  )
}