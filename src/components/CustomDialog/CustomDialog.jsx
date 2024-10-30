import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const CustomDialog = ({ open, onClose, title, children, actions, borderRadius = '30px', subTitle }) => (
    <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{ sx: { borderRadius } }}
    >
        <DialogTitle sx={{fontWeight:'500'}}>{title}</DialogTitle>
        <DialogTitle sx={{fontWeight:'700'}}>{subTitle}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center',}}>
            {actions || (
                <>
                    <Button onClick={onClose} color="primary">Cancel</Button>
                    <Button onClick={onClose} color="primary" variant="contained">Save</Button>
                </>
            )}
        </DialogActions>
    </Dialog>
);

export default CustomDialog;
