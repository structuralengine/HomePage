import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  private Parallax: any
  constructor() {
    this.Parallax = require('parallax-js');
   }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new this.Parallax(scene, {
      relativeInput: true,
      haverOnly: true
    });
  }

}
