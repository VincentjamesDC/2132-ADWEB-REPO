import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: any;

  constructor() {

    this.products = [
      {
        id: "SHL0001",
        name: "Albion Online",
        description: "Albion Online is a fantasy sandbox MMORPG featuring a player-driven economy, classless combat system, and intense PvP battles. Explore a vast open world full of danger and opportunity. Grow your wealth, forge alliances, and leave your mark on the world of Albion.",
        price: "Free to Play"
      },
      {
        id: "SHL0002",
        name: "FIFA 22",
        description: "Powered by Football™, EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.",
        price: "P2,500.00"
      },
      {
        id: "SHL0003",
        name: "CS:GO Prime Status Upgrade",
        description: "Players with Prime Status are matched with other Prime Status players and are eligible to receive Prime-exclusive souvenir items, item drops, and weapon cases.",
        price: "P720.00"
      },
      {
        id: "SHL0004",
        name: "Tower War: WARHAMMER III",
        description: "The cataclysmic conclusion to the Total War: WARHAMMER trilogy is coming. Rally your forces and step into the Realm of Chaos,a dimension of mind-bending horror where the very fate of the world will be decided. Will you conquer your Daemons… or command them?",
        price: "P2,215.00"
      },
      {
        id: "SHL0005",
        name: "Deep Rock Galactic",
        description: "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",
        price: "P649.95"
      },
      {
        id: "SHL0006",
        name: "Naraka: Bladepoint",
        description: "the up to 60-player PVP mythical action combat experience with martial arts inspired melee combat, gravity defying mobility, vast arsenals of melee & ranged weapons, legendary customizable heroes with epic abilities.",
        price: "P750.00"
      },
    ]
   }

  ngOnInit(): void {
  }

}
