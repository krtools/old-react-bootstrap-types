// Type definitions for react-bootstrap 0.32
// TypeScript 6 compatible rewrite
// Based on @types/react-bootstrap 0.32.4

declare module 'react-bootstrap' {
    import React = require('react');

    // ==============================
    // Shared Types
    // ==============================

    export type Sizes = 'xs' | 'xsmall' | 'sm' | 'small' | 'medium' | 'lg' | 'large';

    export interface SelectCallback extends React.EventHandler<any> {
        (eventKey: any, e: React.SyntheticEvent<{}>): void;
        (e: React.MouseEvent<{}>): void;
    }

    export interface TransitionCallbacks {
        onEnter?(node: HTMLElement): any;
        onEntered?(node: HTMLElement): any;
        onEntering?(node: HTMLElement): any;
        onExit?(node: HTMLElement): any;
        onExited?(node: HTMLElement): any;
        onExiting?(node: HTMLElement): any;
    }

    // ==============================
    // Accordion
    // ==============================
    export interface AccordionProps extends React.HTMLProps<Accordion> {
        bsSize?: Sizes;
        bsStyle?: string;
        collapsible?: boolean;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        footer?: React.ReactNode;
        header?: React.ReactNode;
    }
    export class Accordion extends React.Component<AccordionProps> {}

    // ==============================
    // Alert
    // ==============================
    export interface AlertProps extends React.HTMLProps<Alert> {
        bsSize?: Sizes;
        bsStyle?: string;
        closeLabel?: string;
        /** @deprecated since v0.29.0 */ dismissAfter?: number;
        onDismiss?: Function;
    }
    export class Alert extends React.Component<AlertProps> {}

    // ==============================
    // Badge
    // ==============================
    export interface BadgeProps extends React.HTMLProps<Badge> {
        bsClass?: string;
        pullRight?: boolean;
    }
    export class Badge extends React.Component<BadgeProps> {}

    // ==============================
    // Breadcrumb
    // ==============================
    export interface BreadcrumbItemProps {
        children?: React.ReactNode;
        active?: boolean;
        href?: string;
        title?: React.ReactNode;
        target?: string;
    }
    export class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {}

    export interface BreadcrumbProps extends React.HTMLProps<Breadcrumb> {
        bsClass?: string;
    }
    export class Breadcrumb extends React.Component<BreadcrumbProps> {
        static Item: typeof BreadcrumbItem;
    }

    // ==============================
    // Button
    // ==============================
    export interface ButtonProps extends React.HTMLProps<Button> {
        bsClass?: string;
        active?: boolean;
        block?: boolean;
        bsStyle?: string | null;
        bsSize?: Sizes;
        componentClass?: React.ElementType;
        disabled?: boolean;
    }
    export class Button extends React.Component<ButtonProps> {}

    // ==============================
    // ButtonGroup
    // ==============================
    export interface ButtonGroupProps extends React.HTMLProps<ButtonGroup> {
        block?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    export class ButtonGroup extends React.Component<ButtonGroupProps> {}

    // ==============================
    // ButtonToolbar
    // ==============================
    export interface ButtonToolbarProps extends React.HTMLProps<ButtonToolbar> {
        block?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        justified?: boolean;
        vertical?: boolean;
    }
    export class ButtonToolbar extends React.Component<ButtonToolbarProps> {}

    // ==============================
    // Carousel
    // ==============================
    export interface CarouselCaptionProps extends React.HTMLProps<CarouselCaption> {
        componentClass?: React.ElementType;
    }
    export class CarouselCaption extends React.Component<CarouselCaptionProps> {}

    export interface CarouselItemProps extends React.HTMLProps<CarouselItem> {
        active?: boolean;
        animtateIn?: boolean;
        animateOut?: boolean;
        direction?: string;
        index?: number;
        onAnimateOutEnd?: Function;
    }
    export class CarouselItem extends React.Component<CarouselItemProps> {}

    export type CarouselProps = Omit<React.HTMLProps<Carousel>, 'wrap'> & {
        activeIndex?: number;
        bsSize?: Sizes;
        bsStyle?: string;
        controls?: boolean;
        defaultActiveIndex?: number;
        direction?: string;
        indicators?: boolean;
        interval?: number;
        nextIcon?: React.ReactNode;
        onSelect?: SelectCallback;
        onSlideEnd?: Function;
        pauseOnHover?: boolean;
        prevIcon?: React.ReactNode;
        slide?: boolean;
        wrap?: boolean;
    };
    export class Carousel extends React.Component<CarouselProps> {
        static Caption: typeof CarouselCaption;
        static Item: typeof CarouselItem;
    }

    // ==============================
    // Checkbox
    // ==============================
    export interface CheckboxProps extends React.HTMLProps<Checkbox> {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        inputRef?: (instance: HTMLInputElement) => void;
        validationState?: "success" | "warning" | "error";
    }
    export class Checkbox extends React.Component<CheckboxProps> {}

    // ==============================
    // Clearfix
    // ==============================
    export interface ClearfixProps extends React.HTMLProps<Clearfix> {
        componentClass?: React.ElementType;
        visibleXsBlock?: boolean;
        visibleSmBlock?: boolean;
        visibleMdBlock?: boolean;
        visibleLgBlock?: boolean;
    }
    export class Clearfix extends React.Component<ClearfixProps> {}

    // ==============================
    // Col
    // ==============================
    export interface ColProps extends React.HTMLProps<Col> {
        componentClass?: React.ElementType;
        lg?: number;
        lgHidden?: boolean;
        lgOffset?: number;
        lgPull?: number;
        lgPush?: number;
        md?: number;
        mdHidden?: boolean;
        mdOffset?: number;
        mdPull?: number;
        mdPush?: number;
        sm?: number;
        smHidden?: boolean;
        smOffset?: number;
        smPull?: number;
        smPush?: number;
        xs?: number;
        xsHidden?: boolean;
        xsOffset?: number;
        xsPull?: number;
        xsPush?: number;
    }
    export class Col extends React.Component<ColProps> {}

    // ==============================
    // Collapse
    // ==============================
    export interface CollapseProps extends TransitionCallbacks, React.ClassAttributes<Collapse> {
        dimension?: 'height' | 'width' | { (): string };
        getDimensionValue?: (dimension: number, element: React.ReactElement<any>) => number;
        in?: boolean;
        timeout?: number;
        transitionAppear?: boolean;
        unmountOnExit?: boolean;
    }
    export class Collapse extends React.Component<CollapseProps> {}

    // ==============================
    // ControlLabel
    // ==============================
    export interface ControlLabelProps extends React.HTMLProps<ControlLabel> {
        bsClass?: string;
        htmlFor?: string;
        srOnly?: boolean;
    }
    export class ControlLabel extends React.Component<ControlLabelProps> {}

    // ==============================
    // Dropdown
    // ==============================
    export interface DropdownMenuProps extends React.HTMLProps<DropdownMenu> {
        labelledBy?: string | number;
        onClose?: Function;
        onSelect?: SelectCallback;
        open?: boolean;
        pullRight?: boolean;
    }
    export class DropdownMenu extends React.Component<DropdownMenuProps> {}

    export interface DropdownToggleProps extends React.HTMLProps<DropdownToggle> {
        bsRole?: string;
        noCaret?: boolean;
        open?: boolean;
        title?: string;
        useAnchor?: boolean;
        bsClass?: string;
        bsStyle?: string;
        bsSize?: string;
    }
    export class DropdownToggle extends React.Component<DropdownToggleProps> {}

    export interface DropdownBaseProps {
        bsClass?: string;
        componentClass?: React.ElementType;
        disabled?: boolean;
        dropup?: boolean;
        id: string;
        onClose?: Function;
        onSelect?: SelectCallback;
        onToggle?: (isOpen: boolean) => void;
        open?: boolean;
        pullRight?: boolean;
        role?: string;
    }
    export type DropdownProps = DropdownBaseProps & React.HTMLProps<Dropdown>;
    export class Dropdown extends React.Component<DropdownProps> {
        static Menu: typeof DropdownMenu;
        static Toggle: typeof DropdownToggle;
    }

    // ==============================
    // DropdownButton
    // ==============================
    export interface DropdownButtonBaseProps extends DropdownBaseProps {
        block?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        navItem?: boolean;
        noCaret?: boolean;
        pullRight?: boolean;
        title: React.ReactNode;
    }
    export type DropdownButtonProps = DropdownButtonBaseProps & Omit<React.HTMLProps<DropdownButton>, 'title'>;
    export class DropdownButton extends React.Component<DropdownButtonProps> {}

    // ==============================
    // Fade
    // ==============================
    export interface FadeProps extends TransitionCallbacks, React.HTMLProps<Fade> {
        in?: boolean;
        timeout?: number;
        transitionAppear?: boolean;
        unmountOnExit?: boolean;
    }
    export class Fade extends React.Component<FadeProps> {}

    // ==============================
    // Form
    // ==============================
    export interface FormProps extends React.HTMLProps<Form> {
        bsClass?: string;
        componentClass?: React.ElementType;
        horizontal?: boolean;
        inline?: boolean;
    }
    export class Form extends React.Component<FormProps> {}

    // ==============================
    // FormControl
    // ==============================
    export type FormControlFeedbackProps = React.HTMLProps<FormControlFeedback>;
    export class FormControlFeedback extends React.Component<FormControlFeedbackProps> {}

    export interface FormControlStaticProps extends React.HTMLProps<FormControlStatic> {
        bsClass?: string;
        componentClass?: React.ElementType;
    }
    export class FormControlStatic extends React.Component<FormControlStaticProps> {}

    export interface FormControlProps extends React.HTMLProps<FormControl> {
        bsClass?: string;
        bsSize?: Sizes;
        componentClass?: React.ElementType;
        id?: string;
        inputRef?: (instance: HTMLInputElement) => void;
        type?: string;
    }
    export class FormControl extends React.Component<FormControlProps> {
        static Feedback: typeof FormControlFeedback;
        static Static: typeof FormControlStatic;
    }

    // ==============================
    // FormGroup
    // ==============================
    export interface FormGroupProps extends React.HTMLProps<FormGroup> {
        bsClass?: string;
        bsSize?: Sizes;
        controlId?: string;
        validationState?: "success" | "warning" | "error" | null;
    }
    export class FormGroup extends React.Component<FormGroupProps> {}

    // ==============================
    // Glyphicon
    // ==============================
    export interface GlyphiconProps extends React.HTMLProps<Glyphicon> {
        glyph: string;
        bsClass?: string;
    }
    export class Glyphicon extends React.Component<GlyphiconProps> {}

    // ==============================
    // Grid
    // ==============================
    export interface GridProps extends React.HTMLProps<Grid> {
        componentClass?: React.ElementType;
        fluid?: boolean;
        bsClass?: string;
    }
    export class Grid extends React.Component<GridProps> {}

    // ==============================
    // HelpBlock
    // ==============================
    export interface HelpBlockProps extends React.HTMLProps<HelpBlock> {
        bsClass?: string;
    }
    export class HelpBlock extends React.Component<HelpBlockProps> {}

    // ==============================
    // Image
    // ==============================
    export interface ImageProps extends React.HTMLProps<Image> {
        circle?: boolean;
        responsive?: boolean;
        rounded?: boolean;
        thumbnail?: boolean;
    }
    export class Image extends React.Component<ImageProps> {}

    // ==============================
    // InputGroup
    // ==============================
    export type InputGroupAddonProps = React.HTMLProps<InputGroupAddon>;
    export class InputGroupAddon extends React.Component<InputGroupAddonProps> {}

    export type InputGroupButtonProps = React.HTMLProps<InputGroupButton>;
    export class InputGroupButton extends React.Component<InputGroupButtonProps> {}

    export interface InputGroupProps extends React.HTMLProps<InputGroup> {
        bsClass?: string;
        bsSize?: Sizes;
    }
    export class InputGroup extends React.Component<InputGroupProps> {
        static Addon: typeof InputGroupAddon;
        static Button: typeof InputGroupButton;
    }

    // ==============================
    // Jumbotron
    // ==============================
    export interface JumbotronProps extends React.HTMLProps<Jumbotron> {
        componentClass?: React.ElementType;
    }
    export class Jumbotron extends React.Component<JumbotronProps> {}

    // ==============================
    // Label
    // ==============================
    export interface LabelProps extends React.HTMLProps<Label> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
    export class Label extends React.Component<LabelProps> {}

    // ==============================
    // ListGroup
    // ==============================
    export interface ListGroupProps extends React.HTMLProps<ListGroup> {
        bsClass?: string;
        componentClass?: React.ElementType;
        fill?: boolean;
    }
    export class ListGroup extends React.Component<ListGroupProps> {}

    // ==============================
    // ListGroupItem
    // ==============================
    export interface ListGroupItemProps extends React.HTMLProps<ListGroupItem> {
        active?: any;
        bsSize?: Sizes;
        bsStyle?: string;
        eventKey?: any;
        header?: React.ReactNode;
        listItem?: boolean;
    }
    export class ListGroupItem extends React.Component<ListGroupItemProps> {}

    // ==============================
    // Media
    // ==============================
    export interface MediaBodyProps extends React.ClassAttributes<MediaBody> {
        componentClass?: React.ElementType;
    }
    export class MediaBody extends React.Component<MediaBodyProps> {}

    export interface MediaHeadingProps extends React.HTMLProps<MediaHeading> {
        componentClass?: React.ElementType;
    }
    export class MediaHeading extends React.Component<MediaHeadingProps> {}

    export interface MediaLeftProps extends React.HTMLProps<MediaLeft> {
        align?: string;
    }
    export class MediaLeft extends React.Component<MediaLeftProps> {}

    export type MediaListProps = React.HTMLProps<MediaList>;
    export class MediaList extends React.Component<MediaListProps> {}

    export interface MediaListItemProps extends React.HTMLProps<MediaListItem> {
        componentClass?: React.ElementType;
    }
    export class MediaListItem extends React.Component<MediaListItemProps> {}

    export interface MediaRightProps extends React.HTMLProps<MediaRight> {
        align?: string;
    }
    export class MediaRight extends React.Component<MediaRightProps> {}

    export interface MediaProps extends React.HTMLProps<Media> {
        componentClass?: React.ElementType;
    }
    export class Media extends React.Component<MediaProps> {
        static Body: typeof MediaBody;
        static Heading: typeof MediaHeading;
        static Left: typeof MediaLeft;
        static Right: typeof MediaRight;
        static List: typeof MediaList;
        static ListItem: typeof MediaListItem;
    }

    // ==============================
    // MenuItem
    // ==============================
    export interface MenuItemProps extends React.HTMLProps<MenuItem> {
        active?: boolean;
        bsClass?: string;
        disabled?: boolean;
        divider?: boolean;
        eventKey?: any;
        header?: boolean;
        onClick?: React.MouseEventHandler<{}>;
        onSelect?: SelectCallback;
        target?: string;
        title?: string;
    }
    export class MenuItem extends React.Component<MenuItemProps> {}

    // ==============================
    // Modal
    // ==============================
    export interface ModalBodyProps extends React.HTMLProps<ModalBody> {
        componentClass?: React.ElementType;
    }
    export class ModalBody extends React.Component<ModalBodyProps> {}

    export interface ModalDialogProps extends React.HTMLProps<ModalDialog> {
        onHide?: Function;
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
    }
    export class ModalDialog extends React.Component<ModalDialogProps> {}

    export interface ModalFooterProps extends React.HTMLProps<ModalFooter> {
        componentClass?: React.ElementType;
    }
    export class ModalFooter extends React.Component<ModalFooterProps> {}

    export interface ModalHeaderProps extends React.HTMLProps<ModalHeader> {
        closeButton?: boolean;
        closeLabel?: string;
        onHide?: Function;
        bsClass?: string;
    }
    export class ModalHeader extends React.Component<ModalHeaderProps> {}

    export interface ModalTitleProps extends React.HTMLProps<ModalTitle> {
        componentClass?: React.ElementType;
    }
    export class ModalTitle extends React.Component<ModalTitleProps> {}

    export interface ModalProps extends TransitionCallbacks, React.HTMLProps<Modal> {
        onHide: Function;
        animation?: boolean;
        autoFocus?: boolean;
        backdrop?: boolean | string;
        backdropClassName?: string;
        backdropStyle?: any;
        backdropTransitionTimeout?: number;
        bsSize?: Sizes;
        container?: any;
        containerClassName?: string;
        dialogClassName?: string;
        dialogComponent?: any;
        dialogTransitionTimeout?: number;
        enforceFocus?: boolean;
        keyboard?: boolean;
        onBackdropClick?: (node: HTMLElement) => any;
        onEscapeKeyUp?: (node: HTMLElement) => any;
        onShow?: (node: HTMLElement) => any;
        show?: boolean;
        transition?: React.ReactElement<any>;
    }
    export class Modal extends React.Component<ModalProps> {
        static Body: typeof ModalBody;
        static Header: typeof ModalHeader;
        static Title: typeof ModalTitle;
        static Footer: typeof ModalFooter;
        static Dialog: typeof ModalDialog;
    }

    // ==============================
    // Nav
    // ==============================
    export interface NavProps extends React.HTMLProps<Nav> {
        activeHref?: string;
        activeKey?: any;
        bsSize?: Sizes;
        bsStyle?: string;
        collapsible?: boolean;
        eventKey?: any;
        expanded?: boolean;
        justified?: boolean;
        navbar?: boolean;
        pullRight?: boolean;
        right?: boolean;
        stacked?: boolean;
        ulClassName?: string;
        ulId?: string;
    }
    export class Nav extends React.Component<NavProps> {}

    // ==============================
    // Navbar
    // ==============================
    export type NavbarBrandProps = React.HTMLProps<NavbarBrand>;
    export class NavbarBrand extends React.Component<NavbarBrandProps> {}

    export type NavbarCollapseProps = React.HTMLProps<NavbarCollapse>;
    export class NavbarCollapse extends React.Component<NavbarCollapseProps> {}

    export type NavbarHeaderProps = React.HTMLProps<NavbarHeader>;
    export class NavbarHeader extends React.Component<NavbarHeaderProps> {}

    export interface NavbarToggleProps extends React.HTMLProps<NavbarToggle> {
        onClick?: React.MouseEventHandler<any>;
    }
    export class NavbarToggle extends React.Component<NavbarToggleProps> {}

    export interface NavbarLinkProps extends React.HTMLProps<NavbarLink> {
        href: string;
        onClick?: React.MouseEventHandler<any>;
    }
    export class NavbarLink extends React.Component<NavbarLinkProps> {}

    export interface NavbarTextProps extends React.HTMLProps<NavbarText> {
        pullRight?: boolean;
    }
    export class NavbarText extends React.Component<NavbarTextProps> {}

    export interface NavbarFormProps extends Omit<React.HTMLProps<NavbarForm>, 'onToggle'> {
        componentClass?: React.ElementType;
        pullRight?: boolean;
    }
    export class NavbarForm extends React.Component<NavbarFormProps> {}

    export interface NavbarProps extends Omit<React.HTMLProps<Navbar>, 'onToggle'> {
        brand?: any;
        bsSize?: Sizes;
        bsStyle?: string;
        collapseOnSelect?: boolean;
        componentClass?: React.ElementType;
        defaultNavExpanded?: boolean;
        fixedBottom?: boolean;
        fixedTop?: boolean;
        fluid?: boolean;
        inverse?: boolean;
        expanded?: boolean;
        onToggle?: (expanded: boolean) => void;
        staticTop?: boolean;
        toggleButton?: any;
        toggleNavKey?: string | number;
    }
    export class Navbar extends React.Component<NavbarProps> {
        static Brand: typeof NavbarBrand;
        static Collapse: typeof NavbarCollapse;
        static Header: typeof NavbarHeader;
        static Toggle: typeof NavbarToggle;
        static Link: typeof NavbarLink;
        static Text: typeof NavbarText;
        static Form: typeof NavbarForm;
    }

    // ==============================
    // NavDropdown
    // ==============================
    export interface NavDropdownBaseProps extends DropdownBaseProps {
        active?: boolean;
        noCaret?: boolean;
        eventKey?: any;
    }
    export type NavDropdownProps = NavDropdownBaseProps & React.HTMLProps<NavDropdown>;
    export class NavDropdown extends React.Component<NavDropdownProps> {}

    // ==============================
    // NavItem
    // ==============================
    export interface NavItemProps extends Omit<React.HTMLProps<NavItem>, 'onToggle'> {
        active?: boolean;
        brand?: any;
        bsSize?: Sizes;
        bsStyle?: string;
        componentClass?: React.ElementType;
        defaultNavExpanded?: boolean;
        eventKey?: any;
        fixedBottom?: boolean;
        fixedTop?: boolean;
        fluid?: boolean;
        inverse?: boolean;
        linkId?: string;
        navExpanded?: boolean;
        onSelect?: SelectCallback;
        onToggle?: (...args: any[]) => void;
        staticTop?: boolean;
        toggleButton?: any;
        toggleNavKey?: string | number;
    }
    export class NavItem extends React.Component<NavItemProps> {}

    // ==============================
    // Overlay
    // ==============================
    export interface OverlayProps extends TransitionCallbacks {
        animation?: any;
        container?: any;
        containerPadding?: number;
        onHide?: Function;
        placement?: string;
        rootClose?: boolean;
        show?: boolean;
        target?: Function | React.ReactInstance;
        shouldUpdatePosition?: boolean;
    }
    export class Overlay extends React.Component<OverlayProps> {}

    // ==============================
    // OverlayTrigger
    // ==============================
    export interface OverlayTriggerProps {
        children?: React.ReactNode;
        overlay: any;
        animation?: any;
        container?: any;
        containerPadding?: number;
        defaultOverlayShown?: boolean;
        delay?: number;
        delayHide?: number;
        delayShow?: number;
        onEnter?: Function;
        onEntered?: Function;
        onEntering?: Function;
        onExit?: Function;
        onExited?: Function;
        onExiting?: Function;
        placement?: string;
        rootClose?: boolean;
        trigger?: string | string[];
    }
    export class OverlayTrigger extends React.Component<OverlayTriggerProps> {}

    // ==============================
    // PageHeader
    // ==============================
    export type PageHeaderProps = React.HTMLProps<PageHeader>;
    export class PageHeader extends React.Component<PageHeaderProps> {}

    // ==============================
    // Pager
    // ==============================
    export interface PagerItemProps extends React.HTMLProps<PagerItem> {
        disabled?: boolean;
        eventKey?: any;
        next?: boolean;
        onSelect?: SelectCallback;
        previous?: boolean;
        target?: string;
    }
    export class PagerItem extends React.Component<PagerItemProps> {}

    export interface PagerProps extends React.HTMLProps<Pager> {
        onSelect?: SelectCallback;
    }
    export class Pager extends React.Component<PagerProps> {
        static Item: typeof PagerItem;
    }

    // ==============================
    // PageItem (deprecated, use Pager.Item)
    // ==============================
    export type PageItemProps = PagerItemProps;
    /** @deprecated since v0.30.0, use Pager.Item instead */
    export class PageItem extends PagerItem {}

    // ==============================
    // Pagination
    // ==============================
    export interface PaginationEllipsisProps extends React.HTMLProps<PaginationEllipsis> {
        disabled?: boolean;
    }
    export class PaginationEllipsis extends React.Component<PaginationEllipsisProps> {}

    export interface PaginationFirstProps extends React.HTMLProps<PaginationFirst> {
        disabled?: boolean;
    }
    export class PaginationFirst extends React.Component<PaginationFirstProps> {}

    export interface PaginationItemProps extends React.HTMLProps<PaginationItem> {
        disabled?: boolean;
        active?: boolean;
    }
    export class PaginationItem extends React.Component<PaginationItemProps> {}

    export interface PaginationLastProps extends React.HTMLProps<PaginationLast> {
        disabled?: boolean;
    }
    export class PaginationLast extends React.Component<PaginationLastProps> {}

    export interface PaginationNextProps extends React.HTMLProps<PaginationNext> {
        disabled?: boolean;
    }
    export class PaginationNext extends React.Component<PaginationNextProps> {}

    export interface PaginationPrevProps extends React.HTMLProps<PaginationPrev> {
        disabled?: boolean;
    }
    export class PaginationPrev extends React.Component<PaginationPrevProps> {}

    export interface PaginationProps extends React.HTMLProps<Pagination> {
        bsSize?: Sizes;
    }
    export class Pagination extends React.Component<PaginationProps> {
        static First: typeof PaginationFirst;
        static Prev: typeof PaginationPrev;
        static Next: typeof PaginationNext;
        static Last: typeof PaginationLast;
        static Ellipsis: typeof PaginationEllipsis;
        static Item: typeof PaginationItem;
    }

    // ==============================
    // Panel
    // ==============================
    export interface PanelBodyProps extends React.HTMLProps<PanelBody> {
        collapsible?: boolean;
        bsClass?: string;
    }
    export class PanelBody extends React.Component<PanelBodyProps> {}

    export interface PanelCollapseProps extends React.HTMLProps<PanelCollapse> {
        bsClass?: string;
        onEnter?: Function;
        onEntering?: Function;
        onEntered?: Function;
        onExit?: Function;
        onExiting?: Function;
        onExited?: Function;
    }
    export class PanelCollapse extends React.Component<PanelCollapseProps> {}

    export interface PanelFooterProps extends React.HTMLProps<PanelFooter> {
        bsClass?: string;
    }
    export class PanelFooter extends React.Component<PanelFooterProps> {}

    export interface PanelGroupProps extends React.HTMLProps<PanelGroup> {
        accordion?: boolean;
        activeKey?: any;
        defaultActiveKey?: any;
        onSelect?: SelectCallback;
        role?: string;
        generateChildId?: Function;
    }
    export class PanelGroup extends React.Component<PanelGroupProps> {}

    export interface PanelHeadingProps extends React.HTMLProps<PanelHeading> {
        componentClass?: string;
        bsClass?: string;
    }
    export class PanelHeading extends React.Component<PanelHeadingProps> {}

    export interface PanelTitleProps extends React.HTMLProps<PanelTitle> {
        componentClass?: string;
        bsClass?: string;
        toggle?: boolean;
    }
    export class PanelTitle extends React.Component<PanelTitleProps> {}

    export interface PanelToggleProps extends React.HTMLProps<PanelToggle> {
        componentClass?: string;
    }
    export class PanelToggle extends React.Component<PanelToggleProps> {}

    export interface PanelProps extends TransitionCallbacks, React.HTMLProps<Panel> {
        bsStyle?: string;
        defaultExpanded?: boolean;
        eventKey?: any;
        expanded?: boolean;
        onSelect?: SelectCallback;
        onToggle?: SelectCallback;
    }
    export class Panel extends React.Component<PanelProps> {
        static Heading: typeof PanelHeading;
        static Title: typeof PanelTitle;
        static Toggle: typeof PanelToggle;
        static Collapse: typeof PanelCollapse;
        static Body: typeof PanelBody;
        static Footer: typeof PanelFooter;
    }

    // ==============================
    // Popover
    // ==============================
    export interface PopoverProps extends Omit<React.HTMLProps<Popover>, "title"> {
        arrowOffsetLeft?: number | string;
        arrowOffsetTop?: number | string;
        bsSize?: Sizes;
        bsStyle?: string;
        placement?: string;
        positionLeft?: number | string;
        positionTop?: number | string;
        title?: React.ReactNode;
    }
    export class Popover extends React.Component<PopoverProps> {}

    // ==============================
    // ProgressBar
    // ==============================
    export interface ProgressBarProps extends Omit<React.HTMLProps<ProgressBar>, "label"> {
        active?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        interpolatedClass?: any;
        max?: number;
        min?: number;
        now?: number;
        srOnly?: boolean;
        striped?: boolean;
        label?: React.ReactNode;
    }
    export class ProgressBar extends React.Component<ProgressBarProps> {}

    // ==============================
    // Radio
    // ==============================
    export interface RadioProps extends React.HTMLProps<Radio> {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        inputRef?: (instance: HTMLInputElement) => void;
        validationState?: "success" | "warning" | "error";
    }
    export class Radio extends React.Component<RadioProps> {}

    // ==============================
    // ResponsiveEmbed
    // ==============================
    export interface ResponsiveEmbedProps extends React.HTMLProps<ResponsiveEmbed> {
        a16by9?: boolean;
        a4by3?: boolean;
        bsClass?: string;
    }
    export class ResponsiveEmbed extends React.Component<ResponsiveEmbedProps> {}

    // ==============================
    // Row
    // ==============================
    export interface RowProps extends React.HTMLProps<Row> {
        componentClass?: React.ElementType;
    }
    export class Row extends React.Component<RowProps> {}

    // ==============================
    // SafeAnchor
    // ==============================
    export interface SafeAnchorProps extends React.HTMLProps<SafeAnchor> {
        href?: string;
        onClick?: React.MouseEventHandler<{}>;
        disabled?: boolean;
        role?: string;
        componentClass?: React.ElementType;
    }
    export class SafeAnchor extends React.Component<SafeAnchorProps> {}

    // ==============================
    // SplitButton
    // ==============================
    export interface SplitButtonProps extends Omit<React.HTMLProps<SplitButton>, "title"> {
        bsStyle?: string;
        bsSize?: Sizes;
        dropdownTitle?: any;
        dropup?: boolean;
        pullRight?: boolean;
        title: React.ReactNode;
        id: string;
    }
    export class SplitButton extends React.Component<SplitButtonProps> {}

    // ==============================
    // SplitToggle
    // ==============================
    export type SplitToggleProps = DropdownToggleProps & React.HTMLProps<SplitToggle>;
    export class SplitToggle extends React.Component<SplitToggleProps> {}

    // ==============================
    // Tab
    // ==============================
    export interface TabContainerProps extends React.HTMLAttributes<TabContainer> {
        activeKey?: any;
        defaultActiveKey?: any;
        generateChildId?: (eventKey: any, type: any) => string;
    }
    export class TabContainer extends React.Component<TabContainerProps> {}

    export interface TabContentProps extends React.HTMLProps<TabContent> {
        componentClass?: React.ElementType;
        animation?: boolean | React.ElementType;
        mountOnEnter?: boolean;
        unmountOnExit?: boolean;
    }
    export class TabContent extends React.Component<TabContentProps> {}

    export interface TabPaneProps extends TransitionCallbacks, React.HTMLProps<TabPane> {
        animation?: boolean | React.ComponentClass<any>;
        'aria-labelledby'?: string;
        bsClass?: string;
        eventKey?: any;
        unmountOnExit?: boolean;
    }
    export class TabPane extends React.Component<TabPaneProps> {}

    export interface TabProps extends TransitionCallbacks, Omit<React.HTMLProps<Tab>, "title"> {
        animation?: boolean;
        'aria-labelledby'?: string;
        bsClass?: string;
        eventKey?: any;
        unmountOnExit?: boolean;
        tabClassName?: string;
        title?: React.ReactNode;
    }
    export class Tab extends React.Component<TabProps> {
        static Container: typeof TabContainer;
        static Content: typeof TabContent;
        static Pane: typeof TabPane;
    }

    // ==============================
    // Table
    // ==============================
    export interface TableProps extends React.HTMLProps<Table> {
        bordered?: boolean;
        condensed?: boolean;
        hover?: boolean;
        responsive?: boolean;
        striped?: boolean;
        fill?: boolean;
        bsClass?: string;
    }
    export class Table extends React.Component<TableProps> {}

    // ==============================
    // Tabs
    // ==============================
    export interface TabsProps extends React.HTMLProps<Tabs> {
        activeKey?: any;
        animation?: boolean;
        bsStyle?: string;
        defaultActiveKey?: any;
        onSelect?: SelectCallback;
        paneWidth?: any;
        position?: string;
        tabWidth?: any;
        mountOnEnter?: boolean;
        unmountOnExit?: boolean;
        justified?: boolean;
    }
    export class Tabs extends React.Component<TabsProps> {}

    // ==============================
    // Thumbnail
    // ==============================
    export interface ThumbnailProps extends React.HTMLProps<Thumbnail> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
    export class Thumbnail extends React.Component<ThumbnailProps> {}

    // ==============================
    // ToggleButton
    // ==============================
    export interface ToggleButtonProps extends React.HTMLProps<ToggleButton> {
        checked?: boolean;
        name?: string;
        value: number | string;
    }
    export class ToggleButton extends React.Component<ToggleButtonProps> {}

    // ==============================
    // ToggleButtonGroup
    // ==============================
    export type ToggleButtonGroupProps = {
        defaultValue?: any;
        value?: any;
    } & ({
        name: string;
        type: "radio";
        onChange?(value: any): void;
    } | {
        name?: string;
        type: "checkbox";
        onChange?(values: any[]): void;
    }) & Omit<React.HTMLProps<ToggleButtonGroup>, "defaultValue" | "type" | "value" | "onChange">;
    export class ToggleButtonGroup extends React.Component<ToggleButtonGroupProps> {}

    // ==============================
    // Tooltip
    // ==============================
    export interface TooltipProps extends React.HTMLProps<Tooltip> {
        arrowOffsetLeft?: number | string;
        arrowOffsetTop?: number | string;
        bsSize?: Sizes;
        bsStyle?: string;
        placement?: string;
        positionLeft?: number;
        positionTop?: number;
    }
    export class Tooltip extends React.Component<TooltipProps> {}

    // ==============================
    // Well
    // ==============================
    export interface WellProps extends React.HTMLProps<Well> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
    export class Well extends React.Component<WellProps> {}

    // ==============================
    // Utils
    // ==============================
    export namespace utils {
        namespace bootstrapUtils {
            interface BSProps {
                bsClass: any;
                bsSize: any;
                bsStyle: any;
                bsRole: any;
            }
            function prefix(props: { bsClass?: any }, variant?: string): string;
            function bsClass(defaultClass: any, Component: any): any;
            function bsStyles(styles: any, defaultStyle: any, Component: any): any;
            function bsSizes(sizes: any, defaultSize: any, Component: any): any;
            function getClassSet(props: any): any;
            function getBsProps(props: any): BSProps;
            function isBsProp(propName: string): boolean;
            function splitBsProps(props: any): [BSProps, any];
            function splitBsPropsAndOmit(props: any, omittedPropNames: any): [BSProps, any];
            function addStyle(Component: any, ...styleVariant: any[]): any;
        }
        function createChainedFunction(...funcs: Function[]): Function;
    }
}
