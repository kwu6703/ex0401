/**************************************
 *  Author:         Kaixin Wu
 *  Date:           10/14/2018
 *  Description:    Ex4.1, pg. 192 of Sebesta
 * 
 * 
 *************************************/   

// var output = '';
var alertOutput = '';

for (var i = 5; i < 16; i++)
{
    // output += '<tr><td>' + i + '</td></tr>' + 
    alertOutput += ' ' + i  + ' '+ Math.pow(i, 2) + ' ' + Math.pow(i, 3) + '\n';
}

// documet.write(output);
alert(alertOutput);