import { Util } from './util';
import { Label } from './label';

export class Menu {
  name: String;

  icon: String;

  location: String;

  labels: Label[];

  children : Menu[];

  isLeaf : boolean;

  getLocation() :String {

    if(Util.isEmpty(this.location)){

      return "#";
    }

    return this.location;
  }

  getIsLeaf() :boolean {

    if(undefined === this.isLeaf || null === this.isLeaf){

      if(undefined != this.children && null != this.children && this.children.length != 0){

        this.isLeaf = false;
      }
    }

    return this.isLeaf;
  }

  getHasLabel() :boolean {

    let hasLabel = false;
    if(undefined != this.labels && null != this.labels && this.labels.length != 0){

      hasLabel = true;
    }

    return hasLabel;
  }

  public hasChild() :boolean {

    let hasChild = false;

    //has child
    // if(!Util.isEmpty(this.children)){
    //     hasChild = true;
    // }

    return hasChild;
  }

}
