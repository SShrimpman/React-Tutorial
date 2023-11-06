import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    // <div className="alert alert-primary">{children}</div>
    <div>
        <div className="alert alert-primary alert-dismissible fade show">
            <strong>{children}</strong>
            <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}

export default Alert