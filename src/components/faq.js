import React from 'react';

export default function Faq() {

    return (
        <div className="container" style={{paddingTop:'5%', textAlign: 'left'}}>
            
            <hr/>

            <h2 style={{ fontSize: '250%'}}>faq</h2>

            <h4 style={{ fontSize: '150%'}}>how does this whole thing work?</h4>
            <p>
                You can search for any grocery stores by their names, city, province or even postal codes. 
                Through this application, you can find information such as current line length at a 
                grocery store or if they have dedicated senior hours.
            </p>
            <br/>

            <h4 style={{ fontSize: '150%'}}>how do we get the line length information?</h4>
            <p>
                We ask users like yourself to submit this information. When you are at a grocery store waiting 
                in line or have left the grocery store, we ask you to find the store on this website and then 
                submit the "busy" level on the store's page.
            </p>
            <br/>

            <h4 style={{ fontSize: '150%'}}>the information regarding senior hours is wrong</h4>
            <p>
                If you find any information in regards to senior hours that has changed, 
                please update on the store's page.
            </p>
            <br/>

            <h4 style={{ fontSize: '150%'}}>how can you help?</h4>
            <p>
                You can help a lot by just submitting the "busy" level of the grocery store you are 
                visiting or have visited on the store's page. You can also change the "senior hours" 
                information if it is incorrect on the store's page. Aside from that, hosting all of this 
                costs money so it would be nice if you could donate <a target="_blank" href="https://www.buymeacoffee.com/NUxSuRm">here</a>. All the proceeds will be going 
                to maintaining this website and any leftover money will be donated to help people in this crisis.
            </p>
            <br/>

            <h4 style={{ fontSize: '150%'}}>creator</h4>
            <p>
                <a href="https://www.linkedin.com/in/sidhant-vashist/">sidhant vashist</a> 
            </p>
            <br/>

        </div>
    )
}


