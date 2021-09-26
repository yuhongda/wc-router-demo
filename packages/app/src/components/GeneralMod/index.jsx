import React from 'react';

export const PageMod = props => {
  return (
    <div className="page-mod">
      <div className="wrap-mod">{props.children}</div>
    </div>
  );
};

export const TitleMod = props => {
  return (
    <div className="title-mod">
      <h2>{props.children}</h2>
    </div>
  );
};

export const WrapMod = props => {
  return <div className="wrap-mod">{props.children}</div>;
};

export const MainMod = props => {
  return <div className="main-mod">{props.children}</div>;
};

export const PageCard = props => {
  return (
    <div className="wrap-mod" style={{ marginBottom: props.mt ? props.mt : 0 }}>
      <TitleMod>{props.title}</TitleMod>
      <MainMod>{props.children}</MainMod>
    </div>
  );
};

export const PageContainer = props => {
  return (
    <PageMod>
      <TitleMod>{props.title}</TitleMod>
      <MainMod>{props.children}</MainMod>
    </PageMod>
  );
};
