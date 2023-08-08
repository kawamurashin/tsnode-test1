import {ControllerManager} from "@/dist/controller/controllerManager";


export class Index
{
    public static start = (block:SingletonBlock):void =>
    {
        new ControllerManager();

    }
}
class SingletonBlock {}

Index.start(new SingletonBlock());
