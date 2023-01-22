import { observable } from 'mobx';

interface ICustomizeStore {
	isOpen: any[];
	fontFamily: string;
	borderRadius: number;
	onChangeBorderRadius: (borderRadius: number) => void;
	onChangeIsOpen: (isOpen: any[]) => void;
}

const initialState = {
	isOpen: [], // for active default menu
	fontFamily: `'Roboto', sans-serif`,
	borderRadius: 12
};

const customizeStore = observable<ICustomizeStore>({
	isOpen: initialState.isOpen, // for active default menu
	fontFamily: initialState.fontFamily,
	borderRadius: initialState.borderRadius,

	onChangeBorderRadius(borderRadius) {
		this.borderRadius = borderRadius;
	},

	onChangeIsOpen(isOpen) {
		this.isOpen = [isOpen];
	}
});

export default customizeStore;
