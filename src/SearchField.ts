import m from 'mithril';
import { Search, IconButton, Shadow } from 'polythene-mithril';

const iconSearchSVG =
  '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const iconBackSVG =
  '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';
const iconClearSVG =
  '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
const iconMicSVG =
  '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>';

declare type actionFn = () => void;
declare type setInputStateFn = ({
  value,
  focus,
}: {
  value: string;
  focus: boolean;
}) => void;

interface MySearchState {
  value: string;
  setInputState?: setInputStateFn;
}

export default () => {
  const state: MySearchState = {
    value: '',
    setInputState: undefined,
  };

  const iconSearch = m.trust(iconSearchSVG);
  const iconBack = m.trust(iconBackSVG);
  const iconClear = m.trust(iconClearSVG);
  const iconMic = m.trust(iconMicSVG);

  const BackButton = {
    view: ({ attrs: { onclick } }: { attrs: { onclick: actionFn } }) =>
      m(IconButton, {
        className: 'pe-rtl--flip',
        icon: { svg: { content: iconBack } },
        ink: false,
        events: { onclick },
      }),
  };

  const ClearButton = {
    view: ({ attrs: { onclick } }: { attrs: { onclick: actionFn } }) =>
      m(IconButton, {
        icon: { svg: { content: iconClear } },
        ink: false,
        events: { onclick },
      }),
  };

  const SearchIcon = {
    view: () =>
      m(IconButton, {
        icon: { svg: { content: iconSearch } },
        inactive: true,
      }),
  };

  const MicIcon = {
    view: () =>
      m(IconButton, {
        icon: { svg: { content: iconMic } },
        inactive: true,
      }),
  };

  const leave = () => {
    state.value = '';
  };

  const clear = () => {
    if (state.setInputState) {
      state.setInputState({ value: '', focus: true });
    }
  };

  return {
    view: () => {
      // incoming value added for result list example:
      return m(Search, {
        textfield: {
          onChange: ({
            value,
            setInputState,
          }: {
            value: string;
            setInputState: setInputStateFn;
          }) => {
            state.value = value;
            state.setInputState = setInputState;
          },
          value: state.value,
          label: 'Search',
        },
        buttons: {
          none: {
            before: m(SearchIcon),
            after: m(MicIcon),
          },
          focus: {
            before: m(SearchIcon),
            after: m(MicIcon),
          },
          focus_dirty: {
            before: m(BackButton, { onclick: leave }),
            after: m(ClearButton, { onclick: clear }),
          },
          dirty: {
            before: m(BackButton, { onclick: leave }),
            after: m(ClearButton, { onclick: clear }),
          },
        },
        before: m(Shadow),
      });
    },
  };
};
