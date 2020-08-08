import { expect } from 'chai';
import { convertToHumanTimes } from '../src/ConvertToHumanTimes';

describe('ConvertToHumanTime', () => {

  it('should receive 0ms and covert to 0:00', () => {
    expect(convertToHumanTimes(0)).to.be.equal('0:00');
  });

  it('should receive 1000ms and convert to 0:01', () => {
    expect(convertToHumanTimes(1000)).to.be.equal('0:01');
  });

  it('should receive 11000ms and convert to 0:11', () => {
    expect(convertToHumanTimes(11000)).to.be.equal('0:11');
  });

  it('should receive 60000ms and convert to 1:00', () => {
    expect(convertToHumanTimes(60000)).to.be.equal('1:00');
  });

});
