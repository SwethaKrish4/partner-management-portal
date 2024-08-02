import { useState, useEffect } from "react";
import DropdownComponent from '../common/fields/DropdownComponent.js';
import DropdownWithSearchComponent from "../common/fields/DropdownWithSearchComponent.js";
import { useTranslation } from 'react-i18next';
import { createDropdownData } from "../../utils/AppUtils.js";

function DevicesListFilter({ filteredDevicesList, onFilterChange }) {
    const { t } = useTranslation();
    const [deviceTypeData, setDeviceTypeData] = useState([]);
    const [deviceSubTypeData, setDeviceSubTypeData] = useState([]);
    const [makeData, setMakeData] = useState([]);
    const [modelData, setModelData] = useState([]);
    const [statusData, setStatusData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setDeviceTypeData(createDropdownData('deviceTypeCode', '', true, filteredDevicesList, t, t('devicesList.selectDeviceType')));
            setDeviceSubTypeData(createDropdownData('deviceSubTypeCode', '', true, filteredDevicesList, t, t('devicesList.selectDeviceSubType')));
            setMakeData(createDropdownData('make', '', true, filteredDevicesList, t, t('devicesList.selectMakeName')));
            setModelData(createDropdownData('model', '', true, filteredDevicesList, t, t('devicesList.selectModelName')));
            setStatusData(createDropdownData('status', '', true, filteredDevicesList, t, t('devicesList.selectStatus')));
        };
        fetchData();
    }, []);

    const onFilterChangeEvent = (fieldName, selectedFilter) => {
        onFilterChange(fieldName, selectedFilter);
    }

    const styles = {
        dropdownButton: "!text-[#343434] min-w-72"
    }

    return (
        <>
            <div className="flex w-full p-2 justify-start bg-gray-50 flex-wrap">
                <DropdownComponent
                    fieldName='deviceType'
                    dropdownDataList={deviceTypeData}
                    onDropDownChangeEvent={onFilterChangeEvent}
                    fieldNameKey='devicesList.deviceType'
                    placeHolderKey='devicesList.selectDeviceType'
                    styleSet={styles}
                    isPlaceHolderPresent={true}>
                </DropdownComponent>
                <DropdownComponent
                    fieldName='deviceSubType'
                    dropdownDataList={deviceSubTypeData}
                    onDropDownChangeEvent={onFilterChangeEvent}
                    fieldNameKey='devicesList.deviceSubType'
                    placeHolderKey='devicesList.selectDeviceSubType'
                    styleSet={styles}
                    isPlaceHolderPresent={true}>
                </DropdownComponent>
                <DropdownWithSearchComponent 
                    fieldName='make' 
                    dropdownDataList={makeData} 
                    onDropDownChangeEvent={onFilterChangeEvent} 
                    fieldNameKey='devicesList.make' 
                    placeHolderKey='devicesList.selectMakeName'
                    searchKey='commons.search'
                    styleSet={styles}
                    isPlaceHolderPresent={true}>
                </DropdownWithSearchComponent>
                <DropdownWithSearchComponent
                    fieldName='model'
                    dropdownDataList={modelData}
                    onDropDownChangeEvent={onFilterChangeEvent}
                    fieldNameKey='devicesList.model'
                    placeHolderKey='devicesList.selectModelName'
                    searchKey='commons.search'
                    styleSet={styles}
                    isPlaceHolderPresent={true}>
                </DropdownWithSearchComponent>
                <DropdownComponent 
                    fieldName='status' 
                    dropdownDataList={statusData} 
                    onDropDownChangeEvent={onFilterChangeEvent} 
                    fieldNameKey='devicesList.status' 
                    placeHolderKey='devicesList.selectStatus'
                    styleSet={styles}
                    isPlaceHolderPresent={true}> 
                </DropdownComponent>
            </div>
        </>
    )
}

export default DevicesListFilter;