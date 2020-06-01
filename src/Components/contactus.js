import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contactus extends Component {
    render() {
        return (

            <div className="contact-body">
            <Grid className="contact-grid">
             
              <Cell col={12}>
                <h2>Contact Me</h2>
    
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (+91) 8802030518
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                        <i className="fa fa-fax" aria-hidden="true"/>
                        (123) 456-7890
 
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                      karangupta308@gmail.com
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        karangupta161290
                      </ListItemContent>
                     </ListItem>
                                
                    <ListItem>
                      <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        karan-kumar-gupta-839937156
                      </ListItemContent>
                    </ListItem>           
    
    
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>

        );

    }
}

export default Contactus;