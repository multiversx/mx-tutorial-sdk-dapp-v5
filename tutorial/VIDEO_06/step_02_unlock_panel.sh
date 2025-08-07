#!/bin/bash

echo "=== Updating Unlock component with SDK integration ==="

# Navigate to root directory
cd ../../

echo "Updating Unlock.tsx file..."
cat > src/pages/Unlock.tsx << 'EOF'
import { useEffect } from 'react';
import { UnlockPanelManager } from '@multiversx/sdk-dapp/out/managers/UnlockPanelManager';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';
import { useNavigate } from 'react-router-dom';
import { RouteNamesEnum } from 'routes';

export const Unlock = () => {
  const navigate = useNavigate();
  const isLoggedIn = useGetIsLoggedIn();

  const unlockPanelManager = UnlockPanelManager.init({
    loginHandler: () => {
      navigate(RouteNamesEnum.dashboard);
    },
    onClose: () => {
      navigate(RouteNamesEnum.home);
    }
  });

  const handleOpenUnlockPanel = () => {
    unlockPanelManager.openUnlockPanel();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(RouteNamesEnum.dashboard);
      return;
    }
    handleOpenUnlockPanel();
  }, [isLoggedIn]);

  return null;
};
EOF

echo "✅ Unlock component updated successfully!"

echo "=== Updating Header component navigation ==="

echo "Updating Header.tsx file..."
sed -i '' 's|navigate(RouteNamesEnum.dashboard); // TODO: replace with navigate(RouteNamesEnum.unlock);|navigate(RouteNamesEnum.unlock);|g' src/components/Header.tsx

echo "✅ Header component updated successfully!"
echo "Done: step_02_unlock_panel" >> progress.txt
