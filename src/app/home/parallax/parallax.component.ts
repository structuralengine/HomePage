import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    const Parallax = require('parallax-js')
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      haverOnly: true
    });
  }

}
