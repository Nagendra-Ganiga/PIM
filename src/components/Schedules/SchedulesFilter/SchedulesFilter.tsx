import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DownloadCloud, ArrowRight } from 'lucide-react-native';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import SectionHeader, {
  type SectionHeaderProps,
} from '../../UI/Card/CardHeader/CardHeader';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';

type ScheduleTab = 'Active' | 'Upcoming' | 'Completed' | 'In-house' | 'Vendor';

type Schedule = {
  id: string;
  sectionHeaderProps?: SectionHeaderProps;
  details: {
    label: string;
    value: string;
  }[];
  progress: {
    completed: number;
    total: number;
    percentage: number;
  };
};

type SchedulesFilterProps = {
  sectionHeaderProps?: SectionHeaderProps;
};

export default function SchedulesFilter({
  sectionHeaderProps,
}: SchedulesFilterProps) {
  const [activeBtn, setActiveBtn] = useState<ScheduleTab>('Active');

  const schedulesFilter: ScheduleTab[] = [
    'Active',
    'Upcoming',
    'Completed',
    'In-house',
    'Vendor',
  ];

  // Separate data for each tab
  const scheduleData: Record<ScheduleTab, Schedule[]> = {
    Active: [
      {
        id: '1',
        sectionHeaderProps: {
          textProps: {
            eyebrow: 'PI-2025-00482',
            title: 'Finished Goods Count',
          },
          statusProps: {
            status: 'Active',
            statusType: 'success',
          },
        },
        details: [
          { label: 'Plant', value: '1009 · North Manufacturing' },
          { label: 'Storage location', value: 'RM01 · Raw Materials' },
          { label: 'Location type', value: 'In-house' },
          { label: 'Counting date', value: '18 Dec 2025' },
        ],
        progress: {
          completed: 864,
          total: 1184,
          percentage: 73,
        },
      },
      {
        id: '2',
        sectionHeaderProps: {
          textProps: {
            eyebrow: 'PI-2025-00482',
            title: 'Finished Goods Count',
          },
          statusProps: {
            status: 'active',
            statusType: 'success',
          },
        },
        details: [
          { label: 'Plant', value: '1010 · South Manufacturing' },
          { label: 'Storage location', value: 'FG01 · Finished Goods' },
          { label: 'Location type', value: 'In-house' },
          { label: 'Counting date', value: '19 Dec 2025' },
        ],
        progress: {
          completed: 450,
          total: 900,
          percentage: 50,
        },
      },
      {
        id: '3',
        sectionHeaderProps: {
          textProps: {
            eyebrow: 'PI-2025-00483',
            title: 'Vendor Material Count',
          },
          statusProps: {
            status: 'Active',
            statusType: 'success',
          },
        },
        details: [
          { label: 'Plant', value: '1091 · Assembly Plant' },
          { label: 'Storage location', value: 'V-210 · Vendor' },
          { label: 'Location type', value: 'Vendor' },
          { label: 'Counting date', value: '20 Dec 2025' },
        ],
        progress: {
          completed: 300,
          total: 600,
          percentage: 50,
        },
      },
    ],

    Upcoming: [
      {
        id: '4',
        sectionHeaderProps: {
          textProps: {
            eyebrow: 'PI-2025-00486',
            title: 'Vendor Material Count',
          },
          statusProps: {
            status: 'Upcoming',
            statusType: 'upcoming',
          },
        },
        details: [
          { label: 'Plant', value: '1092 · Components Plant' },
          { label: 'Storage location', value: 'PR02 · Shop Floor' },
          { label: 'Location type', value: 'In-house' },
          { label: 'Counting date', value: '25 Dec 2025' },
        ],
        progress: {
          completed: 0,
          total: 320,
          percentage: 0,
        },
      },
    ],

    Completed: [
      {
        id: '4',
        sectionHeaderProps: {
          textProps: {
            eyebrow: 'PI-2025-00485',
            title: 'Vendor Material Count',
          },
          statusProps: {
            status: 'Completed',
            statusType: 'info',
          },
        },
        details: [
          { label: 'Plant', value: '1092 · Components Plant' },
          { label: 'Storage location', value: 'PR02 · Shop Floor' },
          { label: 'Location type', value: 'In-house' },
          { label: 'Counting date', value: '25 Dec 2025' },
        ],
        progress: {
          completed: 100,
          total: 320,
          percentage: 100,
        },
      },
    ],

    'In-house': [
      {
        id: '5',
        sectionHeaderProps: {
          textProps: {
            eyebrow: 'PI-2025-00485',
            title: 'Vendor Material Count',
          },
        },
        details: [
          { label: 'Plant', value: '1009 · North Manufacturing' },
          { label: 'Storage location', value: 'RM01 · Raw Materials' },
          { label: 'Location type', value: 'In-house' },
          { label: 'Counting date', value: '18 Dec 2025' },
        ],
        progress: {
          completed: 1184,
          total: 1184,
          percentage: 100,
        },
      },
    ],

    Vendor: [
      {
        id: '6',
        sectionHeaderProps: {
          textProps: {
            eyebrow: 'PI-2025-00485',
            title: 'Vendor Material Count',
          },
        },
        details: [
          { label: 'Plant', value: '1091 · Assembly Plant' },
          { label: 'Storage location', value: 'V-210 · Northline Components' },
          { label: 'Location type', value: 'Vendor' },
          { label: 'Counting date', value: '18 Dec 2025' },
        ],
        progress: {
          completed: 642,
          total: 642,
          percentage: 100,
        },
      },
    ],
  };

  const filteredSchedules = scheduleData[activeBtn];

  // Split cards into rows of 3
  const scheduleRows: Schedule[][] = [];

  for (let i = 0; i < filteredSchedules.length; i += 3) {
    scheduleRows.push(filteredSchedules.slice(i, i + 3));
  }

  return (
    <View className={SchedulesFilterStyles.container}>
      {/* Tabs */}
      <View className={SchedulesFilterStyles.filterContainer}>
        {schedulesFilter.map(tab => (
          <Button
            key={tab}
            title={tab}
            onPress={() => setActiveBtn(tab)}
            variant={activeBtn === tab ? 'filled' : 'outlined'}
            rounded
            fontSize={12}
            paddingVertical={8}
          />
        ))}
      </View>

      {/* Cards */}
      {filteredSchedules.length > 0 ? (
        <View className={SchedulesFilterStyles.cardsContainer}>
          {scheduleRows.map((row, rowIndex) => (
            <View key={rowIndex} className={SchedulesFilterStyles.cardRow}>
              {row.map(item => (
                <View
                  key={item.id}
                  className={SchedulesFilterStyles.cardWrapper}
                >
                  <Card>
                    <SectionHeader
                      {...(item.sectionHeaderProps ?? sectionHeaderProps)}
                    />

                    {/* Details */}
                    <View>
                      {item.details.map(detail => (
                        <View
                          key={detail.label}
                          className={SchedulesFilterStyles.detailRow}
                        >
                          <Text className={SchedulesFilterStyles.detailLabel}>
                            {detail.label}
                          </Text>

                          <Text className={SchedulesFilterStyles.detailValue}>
                            {detail.value}
                          </Text>
                        </View>
                      ))}
                    </View>

                    {/* Progress */}
                    <View className={SchedulesFilterStyles.progressContainer}>
                      <View className={SchedulesFilterStyles.progressHeader}>
                        <Text className={SchedulesFilterStyles.progressLabel}>
                          {item.progress.completed.toLocaleString()} of{' '}
                          {item.progress.total.toLocaleString()} materials
                        </Text>

                        <Text className={SchedulesFilterStyles.progressValue}>
                          {item.progress.percentage}%
                        </Text>
                      </View>

                      <ProgressBar progress={item.progress.percentage} />
                    </View>

                    {/* Actions */}
                    <View className={SchedulesFilterStyles.actionContainer}>
                      <Button
                        title="View details"
                        buttonType="text"
                        fontSize={10}
                        paddingHorizontal={8}
                      />

                      <Button
                        title="Download scope"
                        buttonType="iconText"
                        variant="outlined"
                        icon={<DownloadCloud size={15} color="#163B66" />}
                        fontSize={10}
                        paddingHorizontal={8}
                      />

                      <Button
                        title="Continue counting"
                        buttonType="iconText"
                        iconPosition="right"
                        icon={<ArrowRight size={16} color="#FFFFFF" />}
                        fontSize={10}
                        paddingHorizontal={8}
                      />
                    </View>
                  </Card>
                </View>
              ))}

              {/* Maintain 3-column width */}
              {Array.from({ length: 3 - row.length }).map((_, index) => (
                <View
                  key={`empty-${index}`}
                  className={SchedulesFilterStyles.cardWrapper}
                />
              ))}
            </View>
          ))}
        </View>
      ) : (
        <View className={SchedulesFilterStyles.emptyContainer}>
          <Text className={SchedulesFilterStyles.emptyTitle}>
            No schedules found
          </Text>
          <Text className={SchedulesFilterStyles.emptyDescription}>
            No schedules available for {activeBtn}.
          </Text>
        </View>
      )}
    </View>
  );
}

export const SchedulesFilterStyles = {
  container: 'gap-[16px]',
  filterContainer: 'flex-row flex-wrap gap-[10px]',
  cardsContainer: 'gap-[10px]',
  cardRow: 'flex-row gap-[10px]',
  cardWrapper: 'flex-1 min-w-0',
  detailRow:
    'flex-row items-center justify-between px-[20px] py-[15px] border-b border-gray',
  detailLabel: 'text12RBlack',
  detailValue: 'text12BDarkNavyBlue',
  progressContainer: 'bg-slate-50 px-[10px] py-[15px]',
  progressHeader: 'flex-row items-center justify-between mb-[8px]',
  progressLabel: 'text12RBlack',
  progressValue: 'text12EBBrandBlue',
  actionContainer:
    'flex-row items-center justify-between flex-wrap gap-[10px] p-[10px] border-t border-t-gray',
  emptyContainer: 'items-center justify-center py-[40px]',
  emptyTitle: 'text16BDarkNavyBlue',
  emptyDescription: 'text12RBlack mt-[5px]',
};
