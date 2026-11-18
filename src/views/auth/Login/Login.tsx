import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import SafeAreaWrapper from '../../../components/UI/SafeArea/SafeAreaWrapper';
import Colors from '../../../styles/Colors';
import StatusBadge from '../../../components/UI/StatusBadge/StatusBadge';
import { LoginStyle } from '../../../styles/GlobalStyles';
import InputText from '../../../components/UI/InputText/InputText';
import KeyboardAvoiding from '../../../components/UI/KeyboardAvoidingView/KeyboardAvoiding';
import {
  Box,
  Wifi,
  UserRound,
  LockKeyhole,
  LockKeyholeOpen,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react-native';
import Button from '../../../components/UI/Button/Button';
import { useAuth } from '../../../context/AuthContext';

export default function Login() {
  const [employeeId, setEmployeeId] = useState('E10482');
  const [password, setPassword] = useState('');
  const { setIsShowLogin } = useAuth();
  const handleSignIn = () => {
    if (employeeId.trim() !== 'E10482') {
      Alert.alert('Invalid Employee ID', 'Please enter a valid Employee ID');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Validation', 'Please enter your password');
      return;
    }

    setIsShowLogin(false);
  };
  return (
    <SafeAreaWrapper>
      <View className={LoginStyle.loginContainer}>
        {/* LEFT PANEL */}

        <View className={LoginStyle.loginLeft}>
          {/* Logo */}

          <View className={LoginStyle.loginWrapper}>
            <View className={LoginStyle.brandLogo}>
              <Box color={Colors.white} size={20} />
            </View>

            <View>
              <Text className={LoginStyle.brandPrimary}>PI Count</Text>

              <Text className={LoginStyle.brandSecondary}>
                Physical Inventory
              </Text>
            </View>
          </View>

          {/* Branding Content */}

          <View className={LoginStyle.brandContainer}>
            {/* <StatusBadge statusType="active" title="SAP-connected · Secure" /> */}

            <StatusBadge
              style={{ alignSelf: 'flex-start' }}
              statusType="active"
              title="SAP-connected · Secure"
            />

            <View className={LoginStyle.brandContent}>
              <Text className={LoginStyle.brandHeading}>
                Count accurately.{'\n'}
                Work confidently.
              </Text>

              <Text className={LoginStyle.brandDescription}>
                Enterprise physical inventory counting built for warehouse
                teams, auditors, and plant coordinators.
              </Text>
            </View>
          </View>

          {/* Network Footer */}

          <View className={LoginStyle.networkFooter}>
            <Wifi color={Colors.brandTealBase} size={18} />

            <View>
              <Text className={LoginStyle.networkTitle}>
                Connected to company network
              </Text>

              <Text className={LoginStyle.networkSubtitle}>
                Environment: PRD-100
              </Text>
            </View>
          </View>
        </View>

        {/* RIGHT PANEL */}
        <View className={LoginStyle.loginRight}>
          <KeyboardAvoiding>
            <View className={LoginStyle.loginForm}>
              {/* Heading */}
              <View className={LoginStyle.loginHeading}>
                <Text className={LoginStyle.loginEyebrow}>
                  AUTHORIZED ACCESS ONLY
                </Text>

                <Text className={LoginStyle.welcomeTitle}>Welcome back</Text>

                <Text className={LoginStyle.welcomeDescription}>
                  Sign in with your company credentials to continue.
                </Text>
              </View>

              {/* Employee ID */}
              <View className={LoginStyle.inputGroup}>
                <InputText
                  labelText="Employee ID"
                  floatingLabel={false}
                  iconPosition="left"
                  icon={<UserRound size={20} color={Colors.mediumGray} />}
                  value={employeeId}
                  onChangeText={setEmployeeId}
                />

                {/* Password */}
                <InputText
                  floatingLabel={false}
                  labelText="Password"
                  secureTextEntry={true}
                  passwordIconPosition="left"
                  passwordShowIcon={
                    <LockKeyholeOpen size={20} color={Colors.mediumGray} />
                  }
                  passwordHideIcon={
                    <LockKeyhole size={20} color={Colors.mediumGray} />
                  }
                  value={password}
                  onChangeText={setPassword}
                />

                {/* Sign In */}
                <Button
                  variant="filled"
                  title="Sign In"
                  buttonType="iconText"
                  iconPosition="right"
                  icon={<ArrowRight size={20} color={Colors.white} />}
                  onPress={handleSignIn}
                />

                {/* SSO */}
                <Button
                  variant="outlined"
                  title="Continue with company SSO"
                  buttonType="iconText"
                  iconPosition="left"
                  icon={<ShieldCheck size={20} color={Colors.brandDarkBlue} />}
                />
              </View>

              {/* Device Status */}
              <View className={LoginStyle.deviceWrapper}>
                <View className={LoginStyle.deviceLeft}>
                  <Text className={LoginStyle.deviceID}>Device ID</Text>
                  <Text className={LoginStyle.deviceNum}>TAB-WH-024</Text>
                </View>
                <StatusBadge
                  statusType="success"
                  title="Online"
                  variant="dot"
                />
              </View>
              {/* Help */}
              <View className={LoginStyle.helpWrapper}>
                <Button
                  title="Need help signing in?"
                  buttonType="text"
                  textStyle="text12BBrandBlue"
                />
              </View>
            </View>
          </KeyboardAvoiding>
        </View>
      </View>
    </SafeAreaWrapper>
  );
}
