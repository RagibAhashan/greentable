import React from 'react'
import { Button } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OrderExplainModal = (props) => {
    const { showExplaination, setShowExplaination } = props;
  
    const handleClose = () => {
        setShowExplaination(false);
    };
  
    return (
      <div >
        <Dialog
          open={showExplaination}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          
        >
        <div>
            <div class='row' style={{width:'90%', margin:'auto'}}>
                <h1 style={{ padding:'20px', width:'100%', fontSize:'20px', color:'black', margin:'auto'}}>
                    Prepare your meal plan with 3 easy steps!
                </h1>


                <div class='col'>

                    {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                    <div class="card-body" style={{border:'none'}}>
                        <h5 class="card-title" style={{color: '#3babdb',  color:'#3babdba0'}}> Step 1</h5>
                        <p class="card-text">
                            Browse restaurants and meals.
                        </p>

                    </div>
                </div>


                <div class='col'>

                    <div style={{border:'none'}}>
                    {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                    <div class="card-body">
                        <h5 class="card-title" style={{color: '#3babdb',  color:'#3babdba0'}}>Step 2</h5>
                        <p class="card-text">
                            Select which meal you would like to eat that day.
                        </p>
                    </div>
                    </div>
                </div>


                <div class='col'>

                    <div style={{border:'none'}}>
                    {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                    <div class="card-body">
                        <h5 class="card-title" style={{color: '#3babdb',  color:'#3babdba0'}}>Step 3</h5>
                        <p class="card-text">
                            Preview and confirm your orders!
                        </p>
                    </div>
                    </div>
                </div>

            </div>
                
                

            </div>




          <DialogActions style={{backgroundColor:'white'}}>

            <Button
                onClick={handleClose} 
                // color="primary" 
                style={{
                    width:'50%',
                    height:'100%',
                    fontSize:'18px',
                    margin:'auto',
                    color:'#3babdb',
                    borderColor:'#3babdb00',
                    backgroundColor:'#3babdb00'
                }}
            >
              Got it!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default OrderExplainModal;