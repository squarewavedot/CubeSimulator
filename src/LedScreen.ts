import Stats = require('stats.js');
import THREE = require('three');

export class LedScreen{
    pixel_height : number;
    pixel_width : number;
    height : number;
    width : number;
    size : number;
    data : Uint8Array;
    texture : THREE.DataTexture;
    mesh : THREE.Mesh;
    geometry: THREE.PlaneBufferGeometry;
    material: THREE.MeshBasicMaterial;
    
    constructor(pixel_height: number,pixel_width: number, geometry: THREE.PlaneBufferGeometry){
        this.pixel_height = pixel_height;
        this.pixel_width = pixel_width;
        this.size = this.pixel_height * this.pixel_width;
        this.data = new Uint8Array( 3 * this.size );
        this.texture = new THREE.DataTexture( this.data, pixel_width, pixel_height, THREE.RGBFormat );
        this.geometry = geometry;
        this.width = geometry.parameters.width;
        this.height = geometry.parameters.height;
        this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
    }

    fill_texture_random(r_base: number,g_base: number,b_base: number): void{
        for ( var i = 0; i < this.size; i ++ ) {
            var stride = i * 3;
            this.data[ stride ]     = r_base*Math.random();
            this.data[ stride + 1 ] = g_base*Math.random();
            this.data[ stride + 2 ] = b_base*Math.random();
        }
        this.invalidate();
    }

    invalidate(): void{
        this.texture.needsUpdate = true;
    }
}