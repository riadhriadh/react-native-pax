import { NativeModules } from 'react-native';

type PaxType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Pax } = NativeModules;

export default Pax as PaxType;
