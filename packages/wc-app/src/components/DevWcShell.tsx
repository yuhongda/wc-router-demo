import { WCAppProps } from './WCApp';
import WcShell from './entry/WcShell';
import { transformToReact } from './common/wc/transformToReact';

const elName = 'scf-wcapp';
!customElements.get(elName) && customElements.define(elName, WcShell);
export default transformToReact<WcShell, WCAppProps>(elName);
