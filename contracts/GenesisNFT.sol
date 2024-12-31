// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";

contract KibokoNFT is ERC721A, ERC2981, Ownable {
    string private _baseTokenURI;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI,
        address royaltyRecipient
    ) ERC721A(name, symbol) Ownable(msg.sender) {
        _baseTokenURI = baseTokenURI;

        // Set royalties for EIP-2981
        _setDefaultRoyalty(royaltyRecipient, 500); // 5% royalty
    }

    /**
     * @dev Mint NFTs for buyers.
     * @param quantity Number of NFTs to mint.
     */
    function mint(uint256 quantity) external payable {
        _safeMint(msg.sender, quantity);
    }

    /**
     * @dev Override to return the base URI for metadata.
     */
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @dev Set the base URI for metadata.
     */
    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }

    /**
     * @dev Override supportsInterface to include ERC2981.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721A, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
