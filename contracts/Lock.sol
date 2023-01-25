//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Vercel {

 uint public Number;

 function setNumber(uint _setNumber) external{
    Number = _setNumber;
 }

 function GetNumber() external view returns(uint){
    return Number;
 }

}
