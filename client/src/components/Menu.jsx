import { CheckboxMenu, LabelMenu, SpanMenu, MenuStyled } from "./styles/MenuStyled";

const Menu = (props) => {
  return (
    <MenuStyled onChange={() => props.changeMenu()}>
      <CheckboxMenu
        type="checkbox"
        id="checkbox-menu"
        activeMenu={props.activeMenu}
      />

      <LabelMenu htmlFor="checkbox-menu">
        <SpanMenu />
        <SpanMenu />
        <SpanMenu />
      </LabelMenu>
    </MenuStyled>
  );
};

export default Menu;
