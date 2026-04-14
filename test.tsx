import {
  Dropdown, Modal, Navbar, Breadcrumb, Carousel, FormControl,
  InputGroup, Media, Pager, Pagination, Panel, Tab,
  Button, Badge, DropdownProps, ModalProps, ButtonProps,
} from "react-bootstrap";
import React from "react";

// Subcomponent JSX usage
const a = <Dropdown.Menu />;
const b = <Dropdown.Toggle />;
const c = <Modal.Body />;
const d = <Modal.Header />;
const e = <Modal.Title />;
const f = <Modal.Footer />;
const g = <Modal.Dialog />;
const h = <Navbar.Brand />;
const i = <Navbar.Collapse />;
const j = <Navbar.Header />;
const k = <Navbar.Toggle />;
const l = <Breadcrumb.Item />;
const m = <Carousel.Caption />;
const n = <Carousel.Item />;
const o = <FormControl.Feedback />;
const p = <FormControl.Static />;
const q = <InputGroup.Addon />;
const r = <InputGroup.Button />;
const s = <Media.Body />;
const t = <Media.Left />;
const u = <Pager.Item />;
const v = <Pagination.First />;
const w = <Pagination.Item />;
const x = <Panel.Heading />;
const y = <Panel.Body />;
const z = <Tab.Container />;
const aa = <Tab.Content />;
const ab = <Tab.Pane />;

// React.createElement
const ac = React.createElement(Dropdown.Menu);
const ad = React.createElement(Modal.Body);
const ae = React.createElement(Panel.Body);

// Regular components
const af = <Button bsStyle="primary">Click</Button>;
const ag = <Badge pullRight>42</Badge>;

// Props types exist
type DP = DropdownProps;
type MP = ModalProps;
type BP = ButtonProps;
