import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TranslateIcon from '@mui/icons-material/Translate';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AppbarActions } from './AppbarSlice';
import { useTranslation } from 'react-i18next';
const Languages = [{
    name: 'English',
    code: 'en'
}, {
    name: 'ภาษาไทย',
    code: 'tha'
}];

interface Language {
    name: string
    code: string
}

export interface DialogProps {
    open: boolean;
    selectedValue: Language;
    onClose: (value: Language) => void;
}

function DialogBox(props: DialogProps) {
    const { onClose, selectedValue, open } = props;
    const appLanguage = useAppSelector(state => {
        return state.app.language
    })
    const { i18n } = useTranslation()
    const dispatch = useAppDispatch()

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = async (value: Language) => {
        dispatch(AppbarActions.setLanguage(value))
        onClose(value);
    };

    React.useEffect(() => {
        console.log({
            appLanguage: appLanguage.code,
            i18nLanguage: i18n.language
        })
        console.log(i18n)
        async function updateLanguage() {
            await i18n.changeLanguage(appLanguage.code)
        }
        updateLanguage()
    } , [appLanguage])

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Change Language</DialogTitle>
            <List sx={{ pt: 0 }}>
                {Languages.map((Language) => (
                    <ListItem selected={Language.code === appLanguage?.code} onClick={() => handleListItemClick(Language)} key={Language.code}>
                        <ListItemText primary={Language.name} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

export default function LanguageSelector() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(Languages[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: Language) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <TranslateIcon onClick={handleClickOpen} />

            <DialogBox
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
