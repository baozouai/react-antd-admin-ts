
import { useEffect, useRef, useCallback } from 'react';

export default function useUpdateEffect(fn:  () => void, dep: any[] = []) {
  const f = useCallback(fn, dep);
  const isMountRef = useRef(false);
  const newDep = [...dep, f];
  useEffect(() => {
    const isMount = isMountRef.current;
    isMountRef.current = true;
    if (isMount) {
      return f();
    }
  }, newDep)
}