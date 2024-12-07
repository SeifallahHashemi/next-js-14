'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Menu from '@/components/Animations/DropDown Menu/menu';

/*type Position<T, V> = {
  [key in keyof T]: V;
}*/
type Position<T> = {
  x: T;
};
const ModernDropdownNavigation = () => {
  // const [isShow, setIsShow] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [trianglePosition, setTrianglePosition] = useState<Position<number>>({
    x: 0,
  });
  const [listSize, setListSize] = useState<number>(0);

  const ulRef = useRef<HTMLUListElement | null>(null);
  const menuOneRef = useRef<HTMLLIElement | null>(null);
  const menuTwoRef = useRef<HTMLLIElement | null>(null);
  const menuThreeRef = useRef<HTMLLIElement | null>(null);

  const mouseEnterHandler = (
    menuName: string,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    if (menuName === selectedMenu && toggleMenu) return;
    let menuPosition: DOMRect | null = null;
    switch (menuName) {
      case 'menuOne':
        menuPosition =
          menuOneRef.current !== null
            ? menuOneRef.current?.getBoundingClientRect()
            : null;
        break;
      case 'menuTwo':
        menuPosition =
          menuTwoRef.current !== null
            ? menuTwoRef.current?.getBoundingClientRect()
            : null;
        break;
      case 'menuThree':
        menuPosition =
          menuThreeRef.current !== null
            ? menuThreeRef.current?.getBoundingClientRect()
            : null;
        break;
      default:
        break;
    }
    if (menuPosition !== null) {
      setTrianglePosition({ x: menuPosition?.left + menuPosition?.width / 2 });
    }
    setToggleMenu(true);
    setSelectedMenu(menuName);
  };

  const mouseLeaveHandler = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>,
  ) => {
    // setTrianglePosition({ x: 0 });
    setToggleMenu(false);
    setSelectedMenu('');
  };

  // const toggleMenuHandler = (state: boolean, menuName: string) => {
  //   setToggleMenu(state);
  //   setSelectedMenu(menuName)
  //   setIsShowing(prevState => !prevState)
  // }
  useLayoutEffect(() => {
    const width = ulRef.current?.getBoundingClientRect().width;
    if (typeof width === 'number') {
      setListSize(width);
    }
  }, []);

  return (
    <div className={'h-screen w-screen bg-none'}>
      <header
        className={
          'w-full h-auto bg-transparent py-2 relative perspective-1000 transform-style-3d'
        }
      >
        <nav className={'flex flex-row justify-center items-center h-auto'}>
          <div className={"w-fit h-fit bg-[#08012a24] border border-[#ffffff20] rounded-[100vw]"}>
            <ul
              ref={ulRef}
              className={
                "flex flex-row justify-center items-center bg-transparent modernNavigationMenu w-fit"
              }
              style={{
                borderRadius: "100vw"
              }}
              onMouseLeave={mouseLeaveHandler}
            >
              <li
                ref={menuOneRef}
                className={"py-4 px-12 bg-transparent cursor-pointer"}
                onMouseEnter={mouseEnterHandler.bind(null, "menuOne")}
              >
                <p className={"font-perFont"}>لوازم خانگی</p>
              </li>
              <li
                ref={menuTwoRef}
                className={"py-4 px-12 bg-transparent cursor-pointer"}
                onMouseEnter={mouseEnterHandler.bind(null, "menuTwo")}
              >
                <p className={"font-perFont"}>البسه</p>
              </li>
              <li
                ref={menuThreeRef}
                className={"py-4 px-12 bg-transparent cursor-pointer"}
                onMouseEnter={mouseEnterHandler.bind(null, "menuThree")}
              >
                <p className={"font-perFont"}>کالاهای دیجیتال</p>
              </li>
              <Menu
                position={trianglePosition}
                minSize={listSize}
                isShow={toggleMenu}
                activeMenu={selectedMenu}
              />
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default ModernDropdownNavigation;
