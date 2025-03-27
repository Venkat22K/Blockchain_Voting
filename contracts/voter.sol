//SPDX-Licesnce-Identifier:GPL-3.0
pragma solidity ^0.8.0;
contract voter{
    struct candidate{
        string name;
        uint count;
    }
address admin;
candidate[] public candidates;
constructor(string[] memory _candidatenames){
    admin = msg.sender;
    for (uint i = 0; i < _candidatenames.length; i++) {  
        candidates.push(candidate({name: _candidatenames[i], count: 0}));
    }
}
   
mapping(address => bool) hasVoted;   


function vote(uint _candidateIndex) public {
    require(_candidateIndex < candidates.length);
    require(!hasVoted[msg.sender] ,"already voted");
    candidates[_candidateIndex].count++;
    hasVoted[msg.sender]=true;
}
function getWinner() external view returns (string memory){
   uint max=0;
   uint win;
    for(uint i=0;i<candidates.length;i++){
        if(candidates[i].count>max){
            max=candidates[i].count;
            win=i;
        }
    }
    
    return candidates[win].name;
}  
}    


