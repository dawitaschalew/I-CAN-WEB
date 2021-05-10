import React, { useState, useMemo, useContext } from "react";

const TabContext = React.createContext();

export const TabProvider = React.memo(({ children }) => {
  const [currIndex, setIndex] = useState(0);

  const contextValue = useMemo(() => ({ currIndex, setIndex }), [
    currIndex,
    setIndex,
  ]);

  return (
    <TabContext.Provider value={contextValue}> {children} </TabContext.Provider>
  );
});

const useTab = () => useContext(TabContext);

export const TabBuilder = React.memo(
  ({ children }) => {
    const { currIndex, setIndex } = useTab();

    const indexValue = useMemo(() => currIndex, [currIndex]);

    if (currIndex == null || setIndex == null) {
      throw Error("TabViews rendered out of tab provider");
    }

    return children(indexValue);
  },
  (prev, next) => true
);

export const TabBar = ({ children }) => {
  const { currIndex, setIndex } = useTab();
  if (!children) {
    throw Error("Please specify children for tabbar");
  }

  return (
    <div className="tabBar">
      {React.Children.map(children, (Item, index) => {
        return React.cloneElement(Item, {
          active: index == currIndex,
          callback: () => {
            setIndex(index);
            Item.props.onTap();
          },
        });
      })}
    </div>
  );
};

export const TabBarItem = React.memo(
  ({ active, callback, icon, color, activeColor, label, trailing, onTap }) => {
    return (
      <>
        <div onClick={callback} className="tabItem">
          {React.Children.map(icon, (Item, index) => {
            return React.cloneElement(Item, {
              width: "1.8",
              height: "1.8",
              color: active ? activeColor : color,
            });
          })}
          <p
            style={{ color: active ? activeColor : color }}
            className={active ? "active" : ""}
          >
            {label}
          </p>
          <div> { trailing } </div>
        </div>
      </>
    );
  }
);
