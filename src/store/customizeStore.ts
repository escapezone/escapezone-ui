import { observable } from 'mobx';

interface ICustomizeStore {
	isOpen: any[];
	fontFamily: string;
	borderRadius: number;
	opened: boolean;
	onChangeOpened: (opened: boolean) => void;
	onChangeBorderRadius: (borderRadius: number) => void;
	onChangeIsOpen: (isOpen: any[]) => void;
}

const initialState = {
	isOpen: [], // for active default menu
	fontFamily: `'Roboto', sans-serif`,
	borderRadius: 12,
	opened: false
};

const customizeStore = observable<ICustomizeStore>({
	isOpen: initialState.isOpen, // for active default menu
	fontFamily: initialState.fontFamily,
	borderRadius: initialState.borderRadius,
	opened: initialState.opened,

	onChangeOpened(opened) {
		this.opened = opened;
	},

	onChangeBorderRadius(borderRadius) {
		this.borderRadius = borderRadius;
	},

	onChangeIsOpen(isOpen) {
		this.isOpen = [isOpen];
	}
});

export default customizeStore;
