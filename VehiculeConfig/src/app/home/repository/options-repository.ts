import { Option } from "../data/option";

export abstract class OptionsRepository {
    public abstract get types() : Option[];
    public abstract get tires() : Option[];
    public abstract get extras() : Option[];
}
